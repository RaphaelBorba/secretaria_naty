import { Alert, Button } from "@mui/material";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import RouteForm from "./RouteForm";
import ConductorForm from "./ConductorForm";
import VehicleForm from "./VehicleForm";
import ClientForm from "./ClientForm";
import api from "@/service/API";

interface LayoutFormProps {
    setShowForm: Dispatch<SetStateAction<"client" | "conductor" | "route" | "vehicle" | "none">>;
    title: string;
    showForm: "client" | "conductor" | "route" | "vehicle" | "none"
}

export default function LayoutForm({ setShowForm, showForm, title }: LayoutFormProps) {

    const [clientForm, setClientForm] = useState({
        numeroDocumento: '',
        tipoDocumento: '',
        nome: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: ''
    })
    const [conductorForm, setConductorForm] = useState({
        nome: "",
        numeroHabilitacao: "",
        categoriaHabilitacao: "",
        vencimentoHabilitacao: ""
    })
    const [routeForm, setRouteForm] = useState({
        kmInicial: 0,
        inicioDeslocamento: "",
        checkList: "",
        motivo: "",
        observacao: "",
        idCondutor: 0,
        idVeiculo: 0,
        idCliente: 0
    })
    const [vehicleForm, setVehicleForm] = useState({
        placa: "",
        marcaModelo: "",
        anoFabricacao: 0,
        kmAtual: 0
    })
    const [erro, setErro] = useState('')

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { name, value } = target

        switch (showForm) {

            case "client":
                setClientForm({ ...clientForm, [name]: value })
                break;
            case "conductor":
                setConductorForm({ ...conductorForm, [name]: value })
                break;
            case "route":
                setRouteForm({ ...routeForm, [name]: value })
                break;
            case "vehicle":
                setVehicleForm({ ...vehicleForm, [name]: value })
                break;

        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            let response
            switch (showForm) {
                case "client":
                    response = await api.post('/api/v1/Cliente', clientForm)
                    break
                case "conductor":
                    response = await api.post('/api/v1/Condutor', conductorForm)
                    break
                case "route":
                    response = await api.post('/api/v1/Deslocamento/IniciarDeslocamento', routeForm)
                    break
                case "vehicle":
                    response = await api.post('/api/v1/Veiculo', vehicleForm)
                    break
            }

            console.log(response)

        } catch (error:any) {
            
            setErro(error.response.data)
            return
        }

        setShowForm('none')
    }

    return (
        <>

            <section
                onClick={() => setShowForm('none')}
                className="flex justify-center items-center w-screen h-screen absolute z-20 top-0 left-0 bg-[#0000004d]" />

            <form
                onSubmit={handleSubmit}
                className=" flex flex-col justify-center w-[50%] max-[1000px]:w-[85%] absolute z-30 rounded-xl h-[800px] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
                <h1 className="text-center text-3xl font-bold text-gray-600 mt-6">
                    {title}
                </h1>

                <div className="grid grid-cols-2 gap-10 p-9">

                    {showForm === 'client' ? <ClientForm clientForm={clientForm} handleForm={handleForm} /> :
                        showForm === 'vehicle' ? <VehicleForm vehicleForm={vehicleForm} handleForm={handleForm} /> :
                            showForm === 'conductor' ? <ConductorForm conductorForm={conductorForm} handleForm={handleForm} /> :
                                showForm === 'route' ? <RouteForm routeForm={routeForm} handleForm={handleForm} /> : ''}
                </div>
                <div className="mx-auto flex gap-10">
                    <Button
                        onClick={() => setShowForm('none')}
                        variant="contained"
                        className="w-32 bg-red-500 hover:bg-red-600 font-bold">Cancelar</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        className="w-32 bg-green-500 hover:bg-green-600 font-bold" >Criar</Button>
                </div>

                {erro ? <Alert className="m-5" severity="error" >{erro}</Alert>
                    : ''}
            </form>

        </>
    )
}
import Board from "@/components/Board"
import { Vehicle } from "@/protocols"
import api from "@/service/API"
import { Button, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeletePopout from "@/components/DeletePopout"

export default function VehiclePage() {

    const router = useRouter()
    const [isDisable, setIsDisable] = useState(true)
    const [vehicle, setVehicle] = useState<Vehicle>()
    const [save, setSave] = useState<Vehicle>()
    const [popout, setPopout] = useState(false)
    const id = router.query.vehicleId
    console.log(id)

    useEffect(() => {

        async function getData() {

            try {

                const promise = await api.get<Vehicle>(`/api/v1/Veiculo/${id}`)

                setVehicle(promise.data)
                setSave(promise.data)
            } catch (error) {
                console.log(error)
            }

        }
        getData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { name, value } = target

        if (vehicle === undefined) return

        setVehicle({ ...vehicle, [name]: value })
    }

    function cancelEdit() {
        setIsDisable(true)
        setVehicle(save)
    }

    function confirmEdit() {

        try {

            api.put(`/api/v1/Veiculo/${id}`, vehicle)
            setIsDisable(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Board>
                <ArrowBack onClick={() => router.replace('/')} className="absolute top-10 left-10 text-3xl cursor-pointer" />

                {
                    vehicle === undefined ? <h1>Veículo não encontrado</h1> :
                        <div className="flex flex-col mt-24 mx-7 w-[100%] gap-8 items-center">

                            <h1 className="text-3xl font-bold">Veículo {router.query.vehicleId}</h1>
                            <form className="grid grid-cols-2 gap-10 max-[400px]:grid-cols-1">

                                <TextField onChange={handleForm} name="placa" disabled={isDisable} value={vehicle.placa} label='Placa' />
                                <TextField onChange={handleForm} name="marcaModelo" disabled={isDisable} value={vehicle.marcaModelo} label='Marca Modelo' />
                                <TextField onChange={handleForm} name="anoFabricacao" disabled={isDisable} value={vehicle.anoFabricacao} label='Ano Fabricação' />
                                <TextField onChange={handleForm} name="kmAtual" disabled={isDisable} value={vehicle.kmAtual} label='Km Atual' />

                            </form>
                            <nav className="flex gap-10 max-[400px]:gap-2">
                                {
                                    isDisable ?
                                        <>
                                            <Button onClick={() => setPopout(true)} variant="contained" className="bg-red-500 w-24 hover:bg-red-600 font-bold">Deletar</Button>
                                            <Button onClick={() => setIsDisable(false)} variant="contained" className="bg-orange-400 w-24 hover:bg-orange-600 font-bold">Editar</Button>
                                        </>
                                        :
                                        <>
                                            <Button onClick={cancelEdit} variant="contained" className="w-24 bg-red-500 hover:bg-red-600 font-bold">Cancelar</Button>
                                            <Button onClick={confirmEdit} variant="contained" className="w-24 bg-green-500 hover:bg-green-600 font-bold">Confirmar</Button>
                                        </>
                                }
                            </nav>
                        </div>
                }
            </Board>
            {popout ?
                <DeletePopout id={Number(id)} title="Veículo" type="vehicle" setPopout={setPopout} />
                : ''
            }
        </>
    )
}
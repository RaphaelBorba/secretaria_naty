import Board from "@/components/Board"
import { Route } from "@/protocols"
import api from "@/service/API"
import { Button, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeletePopout from "@/components/DeletePopout"

export default function VehiclePage() {

    const router = useRouter()
    const [isDisable, setIsDisable] = useState(true)
    const [route, setRoute] = useState<Route>()
    const [save, setSave] = useState<Route>()
    const [popout, setPopout] = useState(false)
    const id = router.query.routeId

    useEffect(() => {

        async function getData() {

            try {

                const promise = await api.get<Route>(`/api/v1/Deslocamento/${id}`)

                setRoute(promise.data)
                setSave(promise.data)
            } catch (error) {
                console.log(error)
            }

        }
        getData()


    }, [id])

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { name, value } = target

        if (route === undefined) return

        setRoute({ ...route, [name]: value })
    }

    function cancelEdit() {
        setIsDisable(true)
        setRoute(save)
    }

    async function confirmEdit() {

        try {
            const response = await api.put(`/api/v1/Deslocamento/${id}/EncerrarDeslocamento`,
                {
                    id: id,
                    kmFinal: route?.kmFinal,
                    fimDeslocamento: route?.fimDeslocamento,
                    observacao: route?.observacao
                })
            setIsDisable(true)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Board>
                <ArrowBack onClick={() => router.replace('/')} className="absolute top-10 left-10 text-3xl cursor-pointer" />

                {
                    route === undefined ? <h1>Deslocamento não encontrado</h1> :
                        <div className="flex flex-col mt-24 mx-7 w-[100%] gap-8 items-center">

                            <h1 className="text-3xl font-bold">Deslocamento {id}</h1>
                            <form className="grid grid-cols-2 gap-10 max-[400px]:grid-cols-1">

                                <TextField onChange={handleForm} name="kmInicial" disabled={true} value={route.kmInicial} label='Km Inicial' />
                                <TextField onChange={handleForm} name="kmFinal" disabled={isDisable} value={route.kmFinal} label='Km Final' />
                                <TextField onChange={handleForm} name="inicioDeslocamento" disabled={true} value={route.inicioDeslocamento} label='Inicio Deslocamento' />
                                <TextField InputLabelProps={{shrink: true}} onChange={handleForm} type="date" name="fimDeslocamento" disabled={isDisable} value={route.fimDeslocamento} label='Fim Deslocamento' />
                                <TextField onChange={handleForm} name="checkList" disabled={true} value={route.checkList} label='Checklist' />
                                <TextField onChange={handleForm} name="motivo" disabled={true} value={route.motivo} label='Motivo' />
                                <TextField onChange={handleForm} name="observacao" disabled={isDisable} value={route.observacao} label='Observação' />
                                <TextField onChange={handleForm} name="idCondutor" disabled={true} value={route.idCondutor} label='Id Condutor' />
                                <TextField onChange={handleForm} name="idVeiculo" disabled={true} value={route.idVeiculo} label='Id Veiculo' />
                                <TextField onChange={handleForm} name="idCliente" disabled={true} value={route.idCliente} label='Id Cliente' />

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
                <DeletePopout id={Number(id)} title="Deslocamento" type="route" setPopout={setPopout} />
                : ''
            }
        </>
    )
}
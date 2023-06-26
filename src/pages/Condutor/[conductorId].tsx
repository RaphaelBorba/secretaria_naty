import Board from "@/components/Board"
import { Conductor } from "@/protocols"
import api from "@/service/API"
import { Button, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeletePopout from "@/components/DeletePopout"

export default function VehiclePage() {

    const router = useRouter()
    const [isDisable, setIsDisable] = useState(true)
    const [conductor, setConductor] = useState<Conductor>()
    const [save, setSave] = useState<Conductor>()
    const [popout, setPopout] = useState(false)
    const id = router.query.conductorId

    useEffect(() => {

        async function getData() {

            try {

                const promise = await api.get<Conductor>(`/api/v1/Condutor/${id}`)

                setConductor(promise.data)
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

        if (conductor === undefined) return

        setConductor({ ...conductor, [name]: value })
    }

    function cancelEdit() {
        setIsDisable(true)
        setConductor(save)
    }

    async function confirmEdit() {

        try {
            console.log(conductor)
            const response = await api.put(`/api/v1/Condutor/${id}`,
                {
                    id: conductor?.id,
                    categoriaHabilitacao: conductor?.catergoriaHabilitacao,
                    vencimentoHabilitacao: conductor?.vencimentoHabilitacao
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
                    conductor === undefined ? <h1>Condutor não encontrado</h1> :
                        <div className="flex flex-col mt-24 mx-7 w-[100%] gap-8 items-center">

                            <h1 className="text-3xl font-bold">Condutor {id}</h1>
                            <form className="grid grid-cols-2 gap-10 max-[400px]:grid-cols-1">

                                <TextField onChange={handleForm} name="nome" disabled={true} value={conductor.nome} label='Nome' />
                                <TextField onChange={handleForm} name="numeroHabilitacao" disabled={true} value={conductor.numeroHabilitacao} label='Numero Habilitação' />
                                <TextField onChange={handleForm} name="catergoriaHabilitacao" disabled={isDisable} value={conductor.catergoriaHabilitacao} label='Catergoria Habilitação' />
                                <TextField onChange={handleForm} name="vencimentoHabilitacao" disabled={isDisable} value={conductor.vencimentoHabilitacao} label='Vencimento Habilitação' />

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
                <DeletePopout id={Number(id)} title="Condutor" type="conductor" setPopout={setPopout} />
                : ''
            }
        </>
    )
}
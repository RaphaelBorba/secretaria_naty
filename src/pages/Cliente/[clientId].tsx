import Board from "@/components/Board"
import { Client } from "@/protocols"
import api from "@/service/API"
import { Button, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeletePopout from "@/components/DeletePopout"

export default function VehiclePage() {

    const router = useRouter()
    const [isDisable, setIsDisable] = useState(true)
    const [client, setClient] = useState<Client>()
    const [save, setSave] = useState<Client>()
    const [popout, setPopout] = useState(false)
    const id = router.query.clientId

    useEffect(() => {

        async function getData() {

            try {

                const promise = await api.get<Client>(`/api/v1/Cliente/${id}`)

                setClient(promise.data)
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

        if (client === undefined) return

        setClient({ ...client, [name]: value })
    }

    function cancelEdit() {
        setIsDisable(true)
        setClient(save)
    }

    async function confirmEdit() {

        try {
            const response = await api.put(`/api/v1/Cliente/${id}`,
                {
                    id: id,
                    nome: client?.nome,
                    logradouro: client?.logradouro,
                    numero: client?.numero,
                    bairro: client?.bairro,
                    cidade: client?.cidade,
                    uf: client?.uf
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
                    client === undefined ? <h1>Cliente não encontrado</h1> :
                        <div className="flex flex-col mt-24 mx-7 w-[100%] gap-8 items-center">

                            <h1 className="text-3xl font-bold">Cliente {id}</h1>
                            <form className="grid grid-cols-2 gap-10 max-[400px]:grid-cols-1">

                                <TextField onChange={handleForm} name="nome" disabled={isDisable} value={client.nome} label='Nome' />
                                <TextField onChange={handleForm} name="tipoDocumento" disabled={true} value={client.tipoDocumento} label='Tipo Documento' />
                                <TextField onChange={handleForm} name="numeroDocumento" disabled={true} value={client.numeroDocumento} label='Numero Documento' />
                                <TextField onChange={handleForm} name="cidade" disabled={isDisable} value={client.cidade} label='Cidade' />
                                <TextField onChange={handleForm} name="bairro" disabled={isDisable} value={client.bairro} label='Bairro' />
                                <TextField onChange={handleForm} name="numero" disabled={isDisable} value={client.numero} label='Numero' />
                                <TextField onChange={handleForm} name="logradouro" disabled={isDisable} value={client.logradouro} label='Logradouro' />
                                <TextField onChange={handleForm} name="uf" disabled={isDisable} value={client.uf} label='UF' />

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
                <DeletePopout id={Number(id)} title="Cliente" type="client" setPopout={setPopout} />
                : ''
            }
        </>
    )
}
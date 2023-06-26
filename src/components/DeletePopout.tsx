import api from "@/service/API";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface DeletePopoutProps {

    type: 'vehicle' | 'conductor' | 'route' | 'client';
    title: 'Veículo' | 'Condutor' | 'Deslocamento' | 'Cliente';
    id: number;
    setPopout: Dispatch<SetStateAction<boolean>>
}

export default function DeletePopout({ title, type, id, setPopout }: DeletePopoutProps) {

    let url = ''
    const router = useRouter()

    switch (type) {
        case "vehicle":
            url = `/api/v1/Veiculo/${id}`
            break;
        case "conductor":
            url = `/api/v1/Condutor/${id}`
            break;
        case "route":
            url = `/api/v1/Deslocamento/${id}`
            break;
        case "client":
            url = `/api/v1/Cliente/${id}`
            break;
    }

    async function deleteElement() {

        try {

            const response = await api.delete(url,{data:{id}})
        
            router.replace('/')
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <section onClick={() => setPopout(false)} className="flex justify-center items-center w-screen h-screen absolute z-20 top-0 left-0 bg-[#0000004d]" />
            <div className="flex flex-col gap-4 items-center justify-center w-80 h-40 rounded-xl absolute z-30 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-xl font-bold">Deletar {title} {id}?</h1>
                <div className="flex gap-4">
                    <Button className="bg-red-500 text-white font-bold hover:bg-red-600" onClick={() => setPopout(false)}>Não</Button>
                    <Button className="bg-green-500 text-white font-bold hover:bg-green-600" onClick={deleteElement}>Sim</Button>
                </div>
            </div>
        </>
    )
}
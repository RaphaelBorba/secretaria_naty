import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface LayoutFormProps {
    setShowForm: Dispatch<SetStateAction<"client" | "conductor" | "route" | "vehicle" | "none">>;
    type: any;
    title: string;
}

export default function LayoutForm({ setShowForm, type, title }: LayoutFormProps) {

    return (
        <>

            <section
                onClick={() => setShowForm('none')}
                className="flex justify-center items-center w-screen h-screen absolute z-20 top-0 left-0 bg-[#0000004d]" />

            <form className=" flex flex-col justify-center w-[50%] absolute z-30 rounded-xl h-[800px] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
                <h1 className="text-center text-3xl font-bold text-gray-600 mt-6">
                    {title}
                </h1>

                <div className="grid grid-cols-2 gap-10 p-9">

                    {type}
                </div>
                <div className="mx-auto flex gap-10">
                    <Button
                        onClick={() => setShowForm('none')}
                        variant="contained"
                        className="w-32 bg-red-500 hover:bg-red-600 font-bold">Cancelar</Button>
                    <Button variant="contained" className="w-32 bg-green-500 hover:bg-green-600 font-bold" >Criar</Button>
                </div>

            </form>

        </>
    )
}
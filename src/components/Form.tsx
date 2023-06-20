import { Button, TextField } from "@mui/material";

export default function Form() {

    return (
        <>

            <section
                onClick={() => console.log('click')}
                className="flex justify-center items-center w-screen h-screen absolute z-20 top-0 left-0 bg-[#0000004d]" />

            <form className=" flex flex-col justify-center w-[50%] absolute z-30 rounded-xl h-[800px] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
                <h1 className="text-center text-3xl font-bold text-gray-600 mt-6">
                    Cliente Novo
                </h1>

                <div className="grid grid-cols-2 gap-10 p-9">

                    <TextField className="" variant="outlined" label="Número Documento" />
                    <TextField variant="outlined" label="Tipo Documento" />
                    <TextField variant="outlined" label="Nome" />
                    <TextField variant="outlined" label="Logradouro" />
                    <TextField variant="outlined" label="Número" />
                    <TextField variant="outlined" label="Bairro" />
                    <TextField variant="outlined" label="Cidade" />
                    <TextField variant="outlined" label="UF" />
                </div>
                <div className="mx-auto flex gap-10">
                    <Button variant="contained" className="w-32 bg-red-500 hover:bg-red-600 font-bold">Cancelar</Button>
                    <Button variant="contained" className="w-32 bg-green-500 hover:bg-green-600 font-bold" >Criar</Button>
                </div>

            </form>

        </>
    )
}
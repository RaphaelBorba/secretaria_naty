import { TextField } from "@mui/material";


export default function ClientForm(){

    return(

        <>
        <TextField className="" variant="outlined" label="Número Documento" />
        <TextField variant="outlined" label="Tipo Documento" />
        <TextField variant="outlined" label="Nome" />
        <TextField variant="outlined" label="Logradouro" />
        <TextField variant="outlined" label="Número" />
        <TextField variant="outlined" label="Bairro" />
        <TextField variant="outlined" label="Cidade" />
        <TextField variant="outlined" label="UF" />
        </>
    )
}
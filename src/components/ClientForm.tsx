import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ClientFormProps {

    handleForm: (e:ChangeEvent)=>void,
    clientForm: any
}


export default function ClientForm({handleForm, clientForm}:ClientFormProps){

    return(

        <>
        <TextField onChange={handleForm} value={clientForm.numeroDocumento} name='numeroDocumento' variant="outlined" label="Número Documento" />
        <TextField onChange={handleForm} value={clientForm.tipoDocumento} name="tipoDocumento" variant="outlined" label="Tipo Documento" />
        <TextField onChange={handleForm} value={clientForm.nome} name="nome" variant="outlined" label="Nome" />
        <TextField onChange={handleForm} value={clientForm.logradouro} name="logradouro" variant="outlined" label="Logradouro" />
        <TextField onChange={handleForm} value={clientForm.numero} name="numero" variant="outlined" label="Número" />
        <TextField onChange={handleForm} value={clientForm.bairro} name="bairro" variant="outlined" label="Bairro" />
        <TextField onChange={handleForm} value={clientForm.cidade} name="cidade" variant="outlined" label="Cidade" />
        <TextField onChange={handleForm} value={clientForm.uf} name="uf" variant="outlined" label="UF" />
        </>
    )
}
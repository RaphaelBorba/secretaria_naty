import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ConductorFormProps {

    handleForm: (e: ChangeEvent) => void,
    conductorForm: any
}

export default function ConductorForm({handleForm, conductorForm}:ConductorFormProps){

    return(

        <>
        <TextField onChange={handleForm} name="nome" value={conductorForm.nome} variant="outlined" label="Nome" />
        <TextField onChange={handleForm} name="numeroHabilitacao" value={conductorForm.numeroHabilitacao} variant="outlined" label="Número Habilitação" />
        <TextField onChange={handleForm} name="categoriaHabilitacao" value={conductorForm.categoriaHabilitacao} variant="outlined" label="Categoria Habilitação" />
        <TextField onChange={handleForm} name="vencimentoHabilitacao" value={conductorForm.vencimentoHabilitacao} 
        InputLabelProps={{
            shrink: true,
          }}
        type="date" 
        variant="outlined" 
        label="Vencimento Habilitação" />
        </>
    )
}
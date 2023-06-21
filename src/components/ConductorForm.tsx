import { TextField } from "@mui/material";


export default function ConductorForm(){

    return(

        <>
        <TextField variant="outlined" label="Nome" />
        <TextField variant="outlined" label="Número Habilitação" />
        <TextField variant="outlined" label="Categoria Habilitação" />
        <TextField 
        InputLabelProps={{
            shrink: true,
          }}
        type="date" 
        variant="outlined" 
        label="Vencimento Habilitação" />
        </>
    )
}
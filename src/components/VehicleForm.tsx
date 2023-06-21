import { TextField } from "@mui/material";


export default function VehicleForm(){

    return(

        <>
        <TextField variant="outlined" label="Placa" />
        <TextField variant="outlined" label="Marca Modelo" />
        <TextField type="number" variant="outlined" label="Ano Fabricação" />
        <TextField type="number" variant="outlined" label="Km Atual" />
        </>
    )
}
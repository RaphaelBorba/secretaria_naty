import { TextField } from "@mui/material";


export default function RouteForm() {

    return (

        <>
            <TextField type="number" variant="outlined" label="Km Inicial" />
            <TextField
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                label="Inicio Deslocamento" />
            <TextField variant="outlined" label="Check List" />
            <TextField variant="outlined" label="Motivo" />
            <TextField variant="outlined" label="Observação" />
            <TextField type="number" variant="outlined" label="Id Condutor" />
            <TextField type="number" variant="outlined" label="Id Veículo" />
            <TextField type="number" variant="outlined" label="Id Cliente" />
        </>
    )
}
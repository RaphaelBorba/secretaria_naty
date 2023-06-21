import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface RouteFormProps {

    handleForm: (e:ChangeEvent)=>void,
    routeForm: any
}


export default function RouteForm({handleForm, routeForm}:RouteFormProps) {

    return (

        <>
            <TextField onChange={handleForm} name="kmInicial" value={routeForm.kmInicial} type="number" variant="outlined" label="Km Inicial" />
            <TextField onChange={handleForm} name="inicioDeslocamento" value={routeForm.inicioDeslocamento}
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                label="Inicio Deslocamento" />
            <TextField onChange={handleForm} name="checkList" value={routeForm.checkList} variant="outlined" label="Check List" />
            <TextField onChange={handleForm} name="motivo" value={routeForm.motivo} variant="outlined" label="Motivo" />
            <TextField onChange={handleForm} name="observacao" value={routeForm.observacao} variant="outlined" label="Observação" />
            <TextField onChange={handleForm} name="idCondutor" value={routeForm.idCondutor} type="number" variant="outlined" label="Id Condutor" />
            <TextField onChange={handleForm} name="idVeiculo" value={routeForm.idVeiculo} type="number" variant="outlined" label="Id Veículo" />
            <TextField onChange={handleForm} name="idCliente" value={routeForm.idCliente} type="number" variant="outlined" label="Id Cliente" />
        </>
    )
}
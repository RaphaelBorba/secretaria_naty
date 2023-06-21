import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface VehicleFormProps {

    handleForm: (e: ChangeEvent) => void,
    vehicleForm: any
}

export default function VehicleForm({ handleForm, vehicleForm }: VehicleFormProps) {

    return (

        <>
            <TextField
                onChange={handleForm}
                name="placa"
                value={vehicleForm.placa}
                variant="outlined"
                label="Placa"
            />
            <TextField
                onChange={handleForm}
                name="marcaModelo"
                value={vehicleForm.marcaModelo}
                variant="outlined"
                label="Marca Modelo"
            />
            <TextField
                onChange={handleForm}
                name="anoFabricacao"
                value={vehicleForm.anoFabricacao}
                type="number"
                variant="outlined"
                label="Ano Fabricação" />
            <TextField
                onChange={handleForm}
                name="kmAtual"
                value={vehicleForm.kmAtual}
                type="number"
                variant="outlined"
                label="Km Atual" />
        </>
    )
}
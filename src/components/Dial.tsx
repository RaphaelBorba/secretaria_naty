import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import Client from '@mui/icons-material/PersonOutlineOutlined';
import Vehicle from '@mui/icons-material/DirectionsCarOutlined';
import Route from '@mui/icons-material/RouteOutlined';
import Conductor from '@mui/icons-material/EngineeringOutlined';

export default function Dial() {

    
    return (
        <>
            <SpeedDial
                ariaLabel="Create"
                sx={{ position: 'absolute', bottom: 25, right: 30 }}
                icon={<SpeedDialIcon />}
                className="[&>button]:bg-slate-400 [&>button]:hover:bg-slate-500"
            >
                <SpeedDialAction
                    icon={<Vehicle className="text-white" />}
                    tooltipTitle="Novo Veículo"
                    className="bg-slate-400 hover:bg-slate-500"
                />
                <SpeedDialAction
                    icon={<Route className="text-white" />}
                    tooltipTitle="Novo Deslocamento"
                    className="bg-slate-400 hover:bg-slate-500"
                />
                <SpeedDialAction
                    icon={<Conductor className="text-white" />}
                    tooltipTitle="Novo Condutor"
                    className="bg-slate-400 hover:bg-slate-500"
                />
                <SpeedDialAction
                    icon={<Client className="text-white" />}
                    tooltipTitle="Novo Cliente"
                    className="bg-slate-400 hover:bg-slate-500"
                />
            </SpeedDial>
        </>
    )
}
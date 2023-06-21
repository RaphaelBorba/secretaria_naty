import Client from '@mui/icons-material/PersonOutlineOutlined';
import Vehicle from '@mui/icons-material/DirectionsCarOutlined';
import Route from '@mui/icons-material/RouteOutlined';
import Conductor from '@mui/icons-material/EngineeringOutlined';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {

    section: 'client' | 'conductor' | 'route' | 'vehicle'
    setSection: Dispatch<SetStateAction<"client" | "conductor" | "route" | "vehicle">>
    isLoading: boolean
}


export default function NavBar({ section, setSection, isLoading }: NavBarProps) {

    return (
        <nav className={`h-[100%] w-48 gap-7 rounded-l-xl bg-slate-400 flex flex-col justify-center items-center ${isLoading?'pointer-events-none':''}`}>
            <div
                onClick={() =>setSection('client')}
                className={`${section==='client'?'bg-slate-500':''} w-[100%] flex flex-col items-center cursor-pointer transition-colors p-4 duration-300 hover:bg-slate-500`}>
                <Client className='text-white text-4xl' />
                <h1 className='text-white text-xl'>Clientes</h1>
            </div>
            <div
                onClick={() =>setSection('conductor')}
                className={`${section==='conductor'?'bg-slate-500':''} w-[100%] flex flex-col items-center cursor-pointer transition-colors p-4 duration-300 hover:bg-slate-500`}>
                <Conductor className='text-white text-4xl' />
                <h1 className='text-white text-xl'>Condutor</h1>
            </div>
            <div
                onClick={() =>setSection('route')}
                className={`${section==='route'?'bg-slate-500':''} w-[100%] flex flex-col items-center cursor-pointer transition-colors p-4 duration-300 hover:bg-slate-500`}>
                <Route className='text-white text-4xl' />
                <h1 className='text-white text-xl'>Deslocamento</h1>
            </div>
            <div
                onClick={() =>setSection('vehicle')}
                className={`${section==='vehicle'?'bg-slate-500':''} w-[100%] flex flex-col items-center cursor-pointer transition-colors p-4 duration-300 hover:bg-slate-500`}>
                <Vehicle className='text-white text-4xl' />
                <h1 className='text-white text-xl'>Veículo</h1>
            </div>
        </nav>
    )
}
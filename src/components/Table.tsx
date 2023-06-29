import TableBody from '@mui/material/TableBody';
import { Table } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Client, Conductor, Route, Vehicle } from '@/protocols';
import { useRouter } from 'next/router';

interface TableComponentProps {

    data: Client[] | Conductor[] | Route[] | Vehicle[] | undefined
    type: 'vehicle' | 'conductor' | 'route' | 'client';
}

export default function TableComponent({ data, type }: TableComponentProps) {

    const router = useRouter()
    let url =''

    switch(type){

        case 'vehicle':
            url = 'Veiculo'
            break;
        case 'conductor':
            url = 'Condutor'
            break;
        case 'route':
            url = 'Deslocamento'
            break;
        case 'client':
            url = 'Cliente'
            break;
    }

    return (
        <TableContainer className='h-fit border border-b-0' component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        {
                            data === undefined || !data[0] ? ''
                                :
                                Object.keys(data[0]).map((e: string, i: number) => <TableCell key={i} align="center"><b>{e}</b></TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data === undefined || !data[0] ? ''
                            :
                            data.map((e) => (

                                <TableRow onClick={() => router.replace(`/${url}/${e.id}`)} className='cursor-pointer transition-colors hover:bg-slate-100' key={e.id}>
                                    {Object.values(e).map((elem: string | number, i: number) => <TableCell key={i} align="center">{elem ? elem : '-'}</TableCell>)}
                                </TableRow>

                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
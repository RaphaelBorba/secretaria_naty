import TableBody from '@mui/material/TableBody';
import { Table } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Client, Conductor, Route, Vehicle } from '@/protocols';

interface TableComponentProps {

    data: Client[] | Conductor[] | Route[] | Vehicle[] | undefined
}

export default function TableComponent({ data }: TableComponentProps) {

    return (
        <TableContainer className='h-fit border border-b-0' component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        {
                            data === undefined || !data[0] ? ''
                            :
                            Object.keys(data[0]).map((e:string)=> <TableCell key={e} align="center"><b>{e}</b></TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data === undefined || !data[0] ? ''
                        :
                         data.map((e) => (
                            <TableRow key={e.id}>
                                {Object.values(e).map((elem:string|number)=><TableCell key={elem} align="center">{elem?elem:'-'}</TableCell>)}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
import TableBody from '@mui/material/TableBody';
import { Table } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Client } from '@/protocols';

interface TableComponentProps {

    data: Client[] | undefined
}

export default function TableComponent({ data }: TableComponentProps) {

    return (
        <TableContainer className='h-fit border border-b-0' component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>Id</b></TableCell>
                        <TableCell align="center"><b>Numero Documento</b></TableCell>
                        <TableCell align="center"><b>Tipo Documento</b></TableCell>
                        <TableCell align="center"><b>Nome</b></TableCell>
                        <TableCell align="center"><b>Logradouro</b></TableCell>
                        <TableCell align="center"><b>Número</b></TableCell>
                        <TableCell align="center"><b>Bairro</b></TableCell>
                        <TableCell align="center"><b>Cidade</b></TableCell>
                        <TableCell align="center"><b>UF</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data === undefined ? ''
                        :
                        data.map((e: Client) => (
                            <TableRow key={e.id}>

                                <TableCell align="center">{e.id}</TableCell>
                                <TableCell align="center">{e.numeroDocumento}</TableCell>
                                <TableCell align="center">{e.tipoDocumento}</TableCell>
                                <TableCell align="center">{e.nome}</TableCell>
                                <TableCell align="center">{e.logradouro}</TableCell>
                                <TableCell align="center">{e.numero}</TableCell>
                                <TableCell align="center">{e.bairro}</TableCell>
                                <TableCell align="center">{e.cidade}</TableCell>
                                <TableCell align="center">{e.uf}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
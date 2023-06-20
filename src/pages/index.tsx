import NavBar from '@/components/NavBar'
import TableComponent from '@/components/Table'
import { Client, Conductor, Route, Vehicle } from '@/protocols'
import api from '@/service/API'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Form from '@/components/Form'
import Dial from '@/components/Dial'

export default function Home() {

  const [data, setData] = useState<Client[] | Conductor[] | Route[] | Vehicle[]>()
  const [section, setSection] = useState<'client' | 'conductor' | 'route' | 'vehicle'>('client')

  useEffect(() => {

    async function getData() {

      let url

      switch (section) {
        case 'client':
          url = '/api/v1/Cliente'
          break
        case 'conductor':
          url = '/api/v1/Condutor'
          break
        case 'route':
          url = '/api/v1/Deslocamento'
          break
        case 'vehicle':
          url = '/api/v1/Veiculo'
          break
      }

      try {

        const apiResponse = await api.get<Client[]>(url)

        setData(apiResponse.data)

      } catch (error) {
        console.log(error)
      }

    }

    getData()
  }, [section])

  return (
    <>
      <main className='h-screen drop-shadow-lg flex justify-center items-center'>
        <section className="flex w-[85%] relative rounded-xl h-[800px] bg-white">
          <NavBar section={section} setSection={setSection} />
          <div className='relative w-[100%] h-[100%] overflow-auto p-4'>

            <TableComponent data={data} />

          </div>
          <Dial/>
          {/* <Button variant='contained' className='w-16 h-16 rounded-full absolute right-6 bottom-4 bg-slate-400 hover:bg-slate-500'>
            <AddIcon />
          </Button> */}
        </section>
      </main>
      {/* <Form/> */}
    </>

  )
}

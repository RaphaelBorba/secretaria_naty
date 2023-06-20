import NavBar from '@/components/NavBar'
import TableComponent from '@/components/Table'
import { Client } from '@/protocols'
import api from '@/service/API'
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] = useState<Client[]>()
  const [section, setSection] = useState<'client' | 'conductor' |'route' | 'vehicle'>('client')

  

  useEffect(() => {

    async function getData() {

      try {
        
        const apiResponse = await api.get<Client[]>('/api/v1/Cliente')
  
        setData(apiResponse.data)
      } catch (error) {
        console.log(error)
      }

    }

    getData()
  }, [])

  return (
    <main className='h-screen flex justify-center items-center'>
      <section className="flex w-[85%]  rounded-xl h-[800px] bg-white">
          <NavBar section={section} setSection={setSection}/>
        <div className='w-[100%] h-[100%] overflow-auto p-4'>

          <TableComponent data={data} />
        </div>
      </section>
    </main>
  )
}

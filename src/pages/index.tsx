import NavBar from '@/components/NavBar'
import TableComponent from '@/components/Table'
import { Client, Conductor, Route, Vehicle } from '@/protocols'
import api from '@/service/API'
import { useEffect, useState } from 'react'
import LayoutForm from '@/components/LayoutForm'
import Dial from '@/components/Dial'
import Board from '@/components/Board'

export default function Home() {

  const [data, setData] = useState<Client[] | Conductor[] | Route[] | Vehicle[]>()
  const [section, setSection] = useState<'client' | 'conductor' | 'route' | 'vehicle'>('client')
  const [showForm, setShowForm] = useState<'client' | 'conductor' | 'route' | 'vehicle' | 'none'>('none')
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {

    async function getData() {

      setIsloading(true)
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
        setIsloading(false)

      } catch (error) {
        console.log(error)
      }

    }

    getData()
  }, [section])

  return (
    <>
      <Board>
        <NavBar isLoading={isloading} section={section} setSection={setSection} />
        {
          data === undefined ? <h1>Erro no carregamento</h1>
            :

            data[0] ?
              <div className='relative w-[90%] h-[100%] overflow-auto p-4 pb-12'>
                <TableComponent type={section} data={data} />
              </div>
              :
              <h1 className=''>Não há registros!</h1>
        }
        <Dial setShowForm={setShowForm} />
      </Board>

      {showForm === 'client' ? <LayoutForm showForm={showForm} setShowForm={setShowForm} title="Cliente Novo" /> :
        showForm === 'vehicle' ? <LayoutForm showForm={showForm} setShowForm={setShowForm} title="Veículo Novo" /> :
          showForm === 'conductor' ? <LayoutForm showForm={showForm} setShowForm={setShowForm} title="Condutor Novo" /> :
            showForm === 'route' ? <LayoutForm showForm={showForm} setShowForm={setShowForm} title="Deslocamento Novo" /> : ''}
    </>

  )
}

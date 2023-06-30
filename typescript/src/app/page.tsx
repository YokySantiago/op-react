'use client'
import { ILocation } from '@/models/locations'
import useRickAndMortyAPI from './../hooks/useRickAndMortyAPI'
import Cards from '@/components/Cards'
import { ICharacter } from '@/models/characters'


export default function Home() {
  const {
    records,
    page,
    setPage,
  } = useRickAndMortyAPI<ICharacter>()

  const handleNextPage = () => {
    setPage(page + 1)
  }

  console.log(records)

  return (
    <main className='px-5 pb-5'>
      <Cards records={records.map(record => ({ image: record.image, name: record.name, description: record.gender }))} />
      <button className='bg-white text-black py-3 px-5 rounded' onClick={handleNextPage}>Next page</button>
    </main>
  )
}

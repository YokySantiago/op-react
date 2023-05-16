import { useEffect, useState } from "react"

import Cards from "../components/Cards"
import useRickAndMortyAPI from "../hooks/useRickAndMortyAPI"

export default function Characters() {
  const {
    records: locations,
    page,
    setPage,
  } = useRickAndMortyAPI('location')
    
  return (
    <>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <Cards cards={locations} />
    </>
  )
}
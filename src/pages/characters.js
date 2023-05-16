import { useEffect, useState } from "react"

import Cards from "../components/Cards"
import useRickAndMortyAPI from "../hooks/useRickAndMortyAPI"

export default function Characters() {
  const {
    records: characters,
    page,
    setPage,
  } = useRickAndMortyAPI()

  return (
    <>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <Cards cards={characters} />
    </>
  )
}
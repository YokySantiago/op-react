'use client'

import { useEffect, useState } from "react"

export default function useRickAndMortyAPI(entity = 'character') {
  const [records, setRecords] = useState([])
  const [page, setPage] = useState(1)

  const getRecords = async () => {
    const ENDPOINT_URL = `https://rickandmortyapi.com/api/${entity}`
    const response = await fetch(ENDPOINT_URL)
    return await response.json() // Promise
  }

  useEffect(() => {
    getRecords().then(({ results }) => {
      setRecords(results)
    })
  }, [page])

  return {
    records,
    page,
    setPage,
  }
}
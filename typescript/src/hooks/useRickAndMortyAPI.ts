'use client'

import { useEffect, useState } from "react"

interface IInformation {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface IResponse <T>{
  info: IInformation;
  results: T[];
}

export default function useRickAndMortyAPI<T>(entity = 'character') {
  const [records, setRecords] = useState<T[]>([])
  const [page, setPage] = useState(1)

  const getRecords = async (): Promise<IResponse<T>> => {
    const ENDPOINT_URL = `https://rickandmortyapi.com/api/${entity}?page=${page}`
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
'use client'
import '../app/globals.css'

import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({ children }) {
  return (
    <>
      <header className='p-2 bg-gray-800 shadow grid grid-cols-2'>
        <div>
          <Link href="/" className='text-bold'>MERN</Link>
        </div>
        <div className='flex self-end'>
          <ul className='flex flex-row gap-2 text-base'>
            <li>
              <Link href="characters" className=''>Characters</Link>
            </li>
            <li>
              <Link href="episodes" className=''>Episodes</Link>
            </li>
            <li>
              <Link href="locations" className=''>Locations</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

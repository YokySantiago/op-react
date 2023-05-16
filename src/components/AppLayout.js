'use client'
import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}

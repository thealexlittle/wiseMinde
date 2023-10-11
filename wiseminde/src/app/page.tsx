'use client';

import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
    </main>
  )
}

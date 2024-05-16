'use client'

import React from 'react'
import TypographyH2 from '../ui/TypographyH2'
import { BrainCircuit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isValidIP } from '@/utils/validateIp'

const FetchOtherIp = () => {
  const [error, setError] = React.useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const ip = formData.get('ip') as string
    if (!isValidIP(ip)) {
      setError('Invalid IP Address')
      return
    }
    router.push(`/${ip}`)
    setError(null)
  }

  return (
    <section className="flex flex-col">
      <TypographyH2>Wanna know about other IP?</TypographyH2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label htmlFor="ip" className="block text-sm font-bold">
              IP Address
            </label>
            <input
              type="text"
              id="ip"
              name="ip"
              className="w-full p-2 border border-primary rounded bg-background"
            />
          </div>
          <button
            type="submit"
            className="flex gap-1 items-center font-semibold bg-primary text-background p-2 rounded h-[42px] group relative"
          >
            Fetch <BrainCircuit />
            <BrainCircuit className="group-hover:animate-ping group-hover:absolute group-hover:block hidden right-2" />
          </button>
        </div>
        <span>{error}</span>
      </form>
    </section>
  )
}

export default FetchOtherIp

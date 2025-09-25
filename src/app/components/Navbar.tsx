'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../../public/breck-cup-logo.png'

const Navbar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render pathname-dependent styles until mounted to prevent hydration mismatch
  const getLinkClassName = (href: string) => {
    const baseClasses = "text-md md:text-xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-3"
    
    if (!isMounted) {
      return `${baseClasses} text-gray-500 hover:text-black hover:decoration-gray-500`
    }
    
    return `${baseClasses} ${
      pathname === href 
        ? 'text-black underline underline-offset-8 decoration-gray-500 decoration-3' 
        : 'text-gray-500 hover:text-black hover:decoration-gray-500'
    }`
  }

  return (
    <nav>
        <div className="px-4 py-4 flex list-none m-0 gap-6 items-center">
            <Link href="/"><Image src={logo} alt="logo" width={75} height={75} /></Link>
            <Link 
              href="/schedule" 
              className={getLinkClassName('/schedule')}
            >
              Schedule
            </Link>
            <Link 
              href="/teams" 
              className={getLinkClassName('/teams')}
            >
              Teams
            </Link>
            <Link 
              href="/matches" 
              className={getLinkClassName('/matches')}
            >
              Matches
            </Link>
            {/* <li className="text-xl">Scoring</li> */}
        </div>
        <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 bg-gray-200"> 
            <div className="flex font-bold text-sm md:justify-start">Breckenridge Cup</div>
            <div className="flex text-sm md:justify-end"> Breckenridge, CO | October 2-4, 2025</div>

        </div>
    </nav>
  )
}

export default Navbar
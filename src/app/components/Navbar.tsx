import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/2025-walker-cup-300x300.png'

const navbar = () => {
  return (
    <nav>
        <div className="px-4 py-4 flex list-none m-0 gap-6 items-center">
            <Link href="/"><Image src={logo} alt="logo" width={75} height={75} /></Link>
            <Link href="/schedule" className="text-md md:text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Schedule</Link>
            <Link href="/teams" className="text-md md:text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Teams</Link>
            <Link href="/matches" className="text-md md:text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Matches</Link>
            {/* <li className="text-xl">Scoring</li> */}
        </div>
        <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 bg-gray-200"> 
            <div className="flex font-bold text-sm md:justify-start">Breckenridge Cup</div>
            <div className="flex text-sm md:justify-end"> Breckenridge, CO | October 2-4, 2025</div>

        </div>
    </nav>
  )
}

export default navbar
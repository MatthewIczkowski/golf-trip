import React from 'react'
import Image from 'next/image'
import logo from '../../../public/2025-walker-cup-300x300.png'

const navbar = () => {
  return (
    <nav>
        <ul className="px-4 py-4 flex list-none m-0 gap-6 items-center">
            <li className="text-2xl font-bold"> <Image src={logo} alt="logo" width={75} height={75} /></li>
            <li className="text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Schedule</li>
            <li className="text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Teams</li>
            <li className="text-xl font-semibold text-gray-500 hover:text-black hover:underline hover:underline-offset-8 hover:decoration-gray-500 hover:decoration-3">Matches</li>
            {/* <li className="text-xl">Scoring</li> */}
        </ul>
        <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 bg-gray-200"> 
            <div className="flex font-bold md:justify-start">Breckenridge Cup</div>
            <div className="flex md:justify-end"> Breckenridge, CO | October 2-4, 2025</div>

        </div>
    </nav>
  )
}

export default navbar
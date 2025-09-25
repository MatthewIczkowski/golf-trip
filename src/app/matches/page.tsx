'use client'

import golfers from '../../data/golfers.json'
import matches from '../../data/matches.json'
import Image from 'next/image'
import { useState } from 'react'

interface Golfer {
  id: number
  name: string
  image: string
  handicap: number
  team: string
  city: string
  description: string
}

interface Match {
  id: number
  day: number
  time: string
  teamA: number[]
  teamB: number[]
}

const matchesData: Match[] = matches.matches
const golfersData: Golfer[] = golfers.golfers
// Note: team filtering not needed here; we use match-provided ids to render names


export default function Matches() {
    const [selectedDay, setSelectedDay] = useState(1)
    
    // Filter matches based on selected day
    const currentDayMatches = matchesData.filter(match => match.day === selectedDay)
    // Build a quick lookup from golfer id to golfer data
    const golfersById: Record<number, Golfer> = Object.fromEntries(
      golfersData.map((g) => [g.id, g])
    ) as Record<number, Golfer>

    const getGolfer = (id: number) => golfersById[id]

    const getInitials = (name: string) => {
      const parts = name.trim().split(/\s+/)
      const initials = parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '').join('')
      return initials || 'G'
    }

    const renderPlayer = (id: number, mirrored: boolean = false) => {
      const golfer = getGolfer(id)
      const name = golfer?.name ?? `Golfer ${id}`
      const img = golfer?.image || ''
      return (
        <div key={id} className={`flex items-center gap-2 ${mirrored ? 'flex-row-reverse' : ''}`}>
          {img ? (
            <Image
              src={img}
              alt={name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="h-10 w-10 p-4 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-semibold">
              {getInitials(name)}
            </div>
          )}
          <span className="text-sm md:text-base text-gray-900">{name}</span>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center overflow-hidden w-full">
        <div className="h-14 flex gap-4 bg-gray-900 text-white w-full justify-center items-center">
          <ul className="flex gap-4 text-xl font-bold">
            <li>
              <button 
                onClick={() => setSelectedDay(1)}
                className={`px-3 py-1 ${
                  selectedDay === 1 
                    ? 'text-white underline underline-offset-8 decoration-red-600 decoration-3' 
                    : 'text-white'
                }`}
              >
                Day 1
              </button>
            </li>
            <li>
              <button 
                onClick={() => setSelectedDay(2)}
                className={`px-3 py-1 ${
                  selectedDay === 2 
                    ? 'text-white underline underline-offset-8 decoration-red-600 decoration-3' 
                    : 'text-white'
                }`}
              >
                Day 2
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-5xl p-4">
          {selectedDay === 1 && (
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-xl font-semibold">Keystone Ranch Golf Course</h3>
              <p className="text-sm mt-1">Friday, October 3rd</p>
            </div>
          )}
          {selectedDay === 2 && (
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-xl font-semibold">Breckenridge Golf Club</h3>
              <p className="text-sm mt-1">Saturday, October 4th</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            {currentDayMatches.map((match) => (
              <div key={match.id} className="col-span-2 grid grid-cols-3 rounded-lg border border-gray-400 bg-white shadow-sm">
                {/* Team A Column */}
                <div className="p-2 md:p-4">
                  <div className="flex flex-col gap-1">
                    {match.teamA.map((id) => renderPlayer(id, false))}
                  </div>
                </div>

                {/* Time Column */}
                <div className="p-2 md:p-4 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">{match.time}</span>
                </div>

                {/* Team B Column */}
                <div className="p-2 md:p-4">
                  <div className="flex flex-col gap-1 items-end text-right">
                    {match.teamB.map((id) => renderPlayer(id, true))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
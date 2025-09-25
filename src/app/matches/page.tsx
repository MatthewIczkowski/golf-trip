import golfers from '../../data/golfers.json'
import matches from '../../data/matches.json'
import Image from 'next/image'

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
const day1Matches = matchesData.filter(match => match.day === 1)
const golfersData: Golfer[] = golfers.golfers
// Note: team filtering not needed here; we use match-provided ids to render names


export default function Matches() {
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
            <h1 className="text-xl font-bold">Day 1</h1>
        </div>

        <div className="w-full max-w-5xl p-4">
          <div className="grid grid-cols-2 gap-4">
            {day1Matches.map((match) => (
              <div key={match.id} className="col-span-2 grid grid-cols-3 rounded-lg border border-gray-200 bg-white shadow-sm">
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
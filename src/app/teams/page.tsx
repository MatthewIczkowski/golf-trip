'use client'

import golfers from '../../data/golfers.json'
import Image from 'next/image'

interface Golfer {
  id: number;
  name: string;
  image: string;
  handicap: number;
  team: string;
  city: string;
  description: string;
}

export default function Teams() {
  const golfersData: Golfer[] = golfers.golfers;
  
  // Filter golfers by team
  const teamA = golfersData.filter(golfer => golfer.team === 'A');
  const teamB = golfersData.filter(golfer => golfer.team === 'B');
  
  // Create placeholder slots for missing golfers
  const createTeamSlots = (team: Golfer[], teamSize: number = 6) => {
    const slots = [];
    
    // Add actual golfers
    for (let i = 0; i < teamSize; i++) {
      if (team[i] && team[i].image && team[i].image.trim() !== '') {
        slots.push(
          <div key={team[i].id} className="h-75 flex flex-col bg-white rounded-lg overflow-hidden shadow-md border border-gray-400 group">
            <div className="relative w-full h-40">
              <Image
                src={team[i].image}
                alt={team[i].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center flex-1 overflow-hidden flex flex-col">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{team[i].name}</h3>
              <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                <span className="text-red-800 font-semibold">HCP: {team[i].handicap}</span>
                <span className="text-gray-400">•</span>
                <span className="truncate">{team[i].city}</span>
              </p>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed italic overflow-y-auto">
                {team[i].description}
              </p>
            </div>
          </div>
        );
      } else if (team[i]) {
        // Golfer exists but has no valid image
        slots.push(
          <div key={team[i].id} className="h-75 flex flex-col bg-white rounded-lg overflow-hidden shadow-md border border-gray-400 group">
            <div className="relative w-full h-40">
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <span className="text-sm">Image pending</span>
              </div>
            </div>
            <div className="p-2 text-center flex-1 overflow-hidden flex flex-col">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{team[i].name}</h3>
              <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                <span className="text-red-800 font-semibold">HCP: {team[i].handicap}</span>
                <span className="text-gray-400">•</span>
                <span className="truncate">{team[i].city}</span>
              </p>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed italic overflow-y-auto">
                {team[i].description}
              </p>
            </div>
          </div>
        );
      } else {
        // Placeholder for missing golfer
        slots.push(
          <div key={`placeholder-${i}`} className="h-85 bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-dashed border-gray-300">
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-lg">?</span>
              </div>
              <span className="text-xs text-center px-2">Open Slot</span>
            </div>
          </div>
        );
      }
    }
    
    return slots;
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team A */}
          <div>
            <h2 className="bg-red-700 text-white text-2xl font-bold text-center rounded-t-lg mb-2 p-2">United States</h2>
            <div className="grid grid-cols-2 gap-2">
              {createTeamSlots(teamA)}
            </div>
          </div>
          
          {/* Team B */}
          <div>
            <h2 className="bg-blue-700 text-white text-2xl font-bold text-center rounded-t-lg mb-2 p-2">Europe</h2>
            <div className="grid grid-cols-2 gap-2">
              {createTeamSlots(teamB)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
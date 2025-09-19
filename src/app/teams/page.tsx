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
          <div key={team[i].id} className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border group">
            <div className="relative w-full h-3/4">
              <Image
                src={team[i].image}
                alt={team[i].name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                        <span class="text-sm">No Image</span>
                      </div>
                    `;
                  }
                }}
              />
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center p-3">
                <p className="text-white text-xs text-center leading-relaxed">
                  {team[i].description}
                </p>
              </div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{team[i].name}</h3>
              <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                <span className="text-blue-600 font-medium">HCP: {team[i].handicap}</span>
                <span className="text-gray-400">•</span>
                <span className="truncate">{team[i].city}</span>
              </p>
            </div>
          </div>
        );
      } else if (team[i]) {
        // Golfer exists but has no valid image
        slots.push(
          <div key={team[i].id} className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
            <div className="relative w-full h-3/4">
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <span className="text-sm">No Image</span>
              </div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{team[i].name}</h3>
              <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                <span className="text-blue-600 font-medium">HCP: {team[i].handicap}</span>
                <span className="text-gray-400">•</span>
                <span className="truncate">{team[i].city}</span>
              </p>
            </div>
          </div>
        );
      } else {
        // Placeholder for missing golfer
        slots.push(
          <div key={`placeholder-${i}`} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-dashed border-gray-300">
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team A */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Team A</h2>
            <div className="grid grid-cols-2 gap-2">
              {createTeamSlots(teamA)}
            </div>
          </div>
          
          {/* Team B */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Team B</h2>
            <div className="grid grid-cols-2 gap-2">
              {createTeamSlots(teamB)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
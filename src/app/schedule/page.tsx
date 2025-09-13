import Image from 'next/image'
import eagleVail from '../../../public/eagle-vail-1.jpg'
import breckenridge from '../../../public/breck-golf-club-1.jpeg'

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Tournament Itinerary
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Breckenridge Cup 2025
          </p>
          <p className="text-lg text-gray-500">
            October 2-4, 2025 • Breckenridge, Colorado
          </p>
        </div>

        {/* Day 1 - Eagle Vail */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Day 1 - October 2nd</h2>
              <h3 className="text-2xl md:text-3xl font-semibold">Eagle Vail Golf Club</h3>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gray-200 rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
                    <Image src={eagleVail} alt="Eagle Vail Golf Club" width={1000} height={1000} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Course Details</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Eagle Vail Golf Club offers a challenging mountain course with stunning 
                      views of the Vail Valley. Known for its elevation changes and pristine 
                      conditions, this course will test every aspect of your game.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Schedule</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>• 1:00 PM - Check-in & Warm-up</li>
                      <li>• 2:00 PM - 1st Tee time</li>
                      <li>• 2:10 PM - 2nd Tee time</li>
                      <li>• 2:20 PM - 3rd Tee time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Day 2 - Breckenridge Golf Club */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Day 2 - October 3rd</h2>
              <h3 className="text-2xl md:text-3xl font-semibold">Breckenridge Golf Club</h3>
              <p className="text-blue-100 text-lg mt-2">Championship Round • 9:00 AM Tee Time</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Course Details</h4>
                      <p className="text-gray-600 leading-relaxed">
                        The crown jewel of our tournament, Breckenridge Golf Club features 
                        three distinct nine-hole courses. With breathtaking mountain views 
                        and championship-level conditions, this is where legends are made.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Schedule</h5>
                      <ul className="text-blue-700 space-y-1">
                        <li>• 8:30 AM - Check-in & Practice Range</li>
                        <li>• 9:00 AM - Championship Tee Time</li>
                        <li>• 1:30 PM - Lunch & Course Awards</li>
                        <li>• 3:00 PM - Free Time in Breckenridge</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="bg-gray-200 rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
                    <Image src={breckenridge} alt="Breckenridge Golf Club" width={1000} height={1000} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Day 3 - Keystone Ranch */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Day 3 - October 4th</h2>
              <h3 className="text-2xl md:text-3xl font-semibold">Keystone Ranch Golf Course</h3>
              <p className="text-purple-100 text-lg mt-2">Final Round • 10:00 AM Tee Time</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gray-200 rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🏔️</div>
                      <p className="text-lg">Keystone Ranch</p>
                      <p className="text-sm">Course Image Coming Soon</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Course Details</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Keystone Ranch offers a unique mountain golf experience with dramatic 
                      elevation changes and stunning Rocky Mountain scenery. This final round 
                      will determine our champion and provide unforgettable memories.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Schedule</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• 9:30 AM - Check-in & Final Warm-up</li>
                      <li>• 10:00 AM - Final Round Tee Time</li>
                      <li>• 2:30 PM - Championship Lunch</li>
                      <li>• 4:00 PM - Trophy Presentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tournament Information</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-semibold text-green-800 mb-2">Format</h4>
              <p className="text-green-700 text-sm">Ryder Cup</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">📅</div>
              <h4 className="font-semibold text-blue-800 mb-2">Duration</h4>
              <p className="text-blue-700 text-sm">3 Days, 3 Rounds</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🏌️</div>
              <h4 className="font-semibold text-purple-800 mb-2">Prizes</h4>
              <p className="text-purple-700 text-sm">Bragging Rights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
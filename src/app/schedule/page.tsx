import Image from 'next/image'
import eagleVail from '../../../public/eagle-vail-1.jpg'
import breckenridge from '../../../public/breck-golf-club-1.jpeg'

export default function Schedule() {
  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Tournament Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Day 1 - Eagle Vail */}
          <div className="bg-gray-200 border-2 border-blue-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="text-blue-900 p-6">
              <h2 className="text-2xl font-bold mb-1">Day 1</h2>
              <h3 className="text-xl font-semibold">Eagle Vail Golf Club</h3>
              <p className="text-blue-900 text-sm mt-1">Thursday, October 2nd</p>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <Image src={eagleVail} alt="Eagle Vail Golf Club" width={400} height={300} className="w-full h-full object-cover rounded-lg" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Course Details</h4>
                  <p className="text-sm leading-relaxed">
                    Eagle Vail Golf Club offers a challenging mountain course with stunning 
                    views of the Vail Valley. Known for its elevation changes and pristine 
                    conditions, this course will test every aspect of your game.
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2 text-sm">Schedule</h5>
                  <ul className="text-blue-900 space-y-1 text-sm">
                    <li>• 1:00 PM - Check-in & Warm-up</li>
                    <li>• 2:00 PM - 1st Tee time</li>
                    <li>• 2:10 PM - 2nd Tee time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 - Keystone Ranch */}
          <div className="bg-gray-200 border-2 border-blue-900 rounded-2xl shadow-xl overflow-hidden">
            <div className=" text-blue-900 p-6">
              <h2 className="text-2xl font-bold mb-1">Day 2</h2>
              <h3 className="text-xl font-semibold">Keystone Ranch Golf Course</h3>
              <p className="text-blue-900 text-sm mt-1">Saturday, October 4th</p>
            </div>
            
            <div className="p-6">
              <div className="bg-white rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏔️</div>
                  <p className="text-lg">Keystone Ranch</p>
                  <p className="text-sm">Course Image Coming Soon</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Course Details</h4>
                  <p className="text-sm leading-relaxed">
                    Keystone Ranch offers a unique mountain golf experience with dramatic 
                    elevation changes and stunning Rocky Mountain scenery. This final round 
                    will determine our champion and provide unforgettable memories.
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2 text-sm">Schedule</h5>
                  <ul className="text-blue-900 space-y-1 text-sm">
                    <li>• 10:30 AM - Check-in & Warm-up</li>
                    <li>• 11:23 AM - 1st Tee time</li>
                    <li>• 11:32 AM - 2nd Tee time</li>
                    <li>• 11:50 AM - 3rd Tee time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        

        {/* Day 3 - Breckenridge Golf Club */}
        <div className="bg-gray-200 border-2 border-blue-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="text-blue-900 p-6">
              <h2 className="text-2xl font-bold mb-1">Day 3</h2>
              <h3 className="text-xl font-semibold">Breckenridge Golf Club</h3>
              <p className="text-blue-900 text-sm mt-1">Friday, October 3rd</p>
            </div>
            
            <div className="p-6">
              <div className="bg-white rounded-lg h-48 flex items-center justify-center mb-4">
                <Image src={breckenridge} alt="Breckenridge Golf Club" width={400} height={300} className="w-full h-full object-cover rounded-lg" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Course Details</h4>
                  <p className="text-sm leading-relaxed">
                    The crown jewel of our tournament, Breckenridge Golf Club features 
                    three distinct nine-hole courses. With breathtaking mountain views 
                    and championship-level conditions, this is where legends are made.
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2 text-sm">Schedule</h5>
                  <ul className="text-blue-900 space-y-1 text-sm">
                    <li>• 9:30 AM - Check-in & Warm-up</li>
                    <li>• 10:00 AM - 1st Tee time</li>
                    <li>• 10:10 AM - 2nd Tee time</li>
                    <li>• 10:20 AM - 3rd Tee time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-200 border-2 border-blue-900 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Tournament Information</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-semibold text-green-800 mb-2">Format</h4>
              <p className="text-green-700 text-sm">Ryder Cup</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl mb-2">📅</div>
              <h4 className="font-semibold text-blue-800 mb-2">Duration</h4>
              <p className="text-blue-700 text-sm">3 Days, 3 Rounds</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg">
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
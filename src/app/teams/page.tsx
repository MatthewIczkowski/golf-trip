export default function Teams() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-2">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Team A</h2>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Team B</h2>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-6">
          {/* Column 1 - 6 images */}
          <div className="space-y-2 grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-sm">Image {i + 1}</span>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-sm">Image {i + 2}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Column 3 - 6 images */}
          <div className="space-y-2 grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-sm">Image {i + 7}</span>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-sm">Image {i + 8}</span>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image'
import logo from '../../public/Breckenridge-Golf.jpg'

export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden">
        <Image 
          src={logo} 
          alt="logo" 
          width={1920} 
          height={1080}
          className="hidden md:block md:w-full md:h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 text-black p-2 md:p-4 rounded-lg">
          <p className="text-sm md:text-lg text-center mt-2">More info coming soon!</p>
        </div>
    </div>
  );
}

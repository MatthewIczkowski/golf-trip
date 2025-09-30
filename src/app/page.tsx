import Image from 'next/image'
import logo from '../../public/Breckenridge-Golf.jpg'
import CountdownTimer from '../components/CountdownTimer'

export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <Image 
        src={logo} 
        alt="logo" 
        width={1920} 
        height={1080}
        className="w-full h-screen object-cover object-center"
      />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300/90 text-black p-4 md:p-6 rounded-lg">
        <CountdownTimer />
      </div>
    </div>
  );
}

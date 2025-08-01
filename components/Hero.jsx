import React from 'react'
import Image from 'next/image' 

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className='flex-col'>
        <Image
          src="/caliO.png"
          alt="Hero Image"
          width={600}
          height={600}
        />
      </div>
      <div className=''>
        <h1 className='text-4xl font-bold'>Ar-Ribat</h1>
        <p className='text-[80px] mt-4'>يا ايها الذين امنوا اصبروا وصابروا ورابطوا واتقوا الله لعلكم تفلحون</p>
        <button className='mt-6 px-4 py-2 bg-blue-500 text-white rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const logoRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current

    // Timeline for drop in + hover
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logo,        // watch the logo
        start: "top 80%",     // when top of logo is 80% down the viewport
        once: true            // only trigger once
      }
    })

    // Drop in
    tl.fromTo(logo,
      { y: "-150%", opacity: 0 }, // start far above its natural position
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "ease.inOut",
      }
    )

    // Hover loop after drop
    tl.to(logo, {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, [])

  return (
    <div className="flex items-center justify-center lg:gap-20 w-screen h-screen flex-wrap">
      <Image
        ref={logoRef}
        className="logo w-[30vw]"
        src="/caliO.png"
        alt="Hero Image"
        width={600}
        height={600}
      />
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold text-shadow-sm/20">Ar-Ribat</h1>
        <p className="text-4xl mt-4 text-shadow-sm/20">
          يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟
          وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ
        </p>
      </div>
    </div>
  )
}

export default Hero

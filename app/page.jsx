"use client"
import React from 'react'
import Image from 'next/image'
import Page3 from './Page3/page'
import Page2 from './Page2/page'
import Page5 from './Page5/page'
import Page6 from './Page6/page'
import Page4 from './Page4/page'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';




const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#arrow", {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#btn2",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 75%",
        scrub: 1

      }
    });



  }, [])


  return (
    <>
      <div className='min-h-[95vh]   h-auto w-full relative flex items-center justify-start px-3 ' id='home'>



        <a id="arrow" href="#home" className=' flex gap-1 bg-blue-600 text-white px-2 py-1 flex-row fixed z-30 bottom-0 right-10'>
          <h4>Top</h4>
          <i className="ri-arrow-up-line"></i>
        </a>



        <Image src={'/assets/images/bg.jpg'} width={2000} height={2000} className=' object-cover w-full h-full overflow-hidden  top-0 left-0 absolute z-[-20]' />

        <div id="btn2" className='flex items-center justify-start w-1/2 '>

          <h1 className='text-[55px]  leading-[66px] font-playfair font-[1000]'>Helping entrepreneurs scale <span className='underline-offset-8 underline'>unfathomable</span> and <span className='underline-offset-8 underline'>consistent</span> innovations for digital transformation</h1>
        </div>

      </div>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  )
}

export default Home

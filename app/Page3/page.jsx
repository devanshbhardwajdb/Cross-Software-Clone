import React from 'react'
import Image from 'next/image'

const Page3 = () => {
  return (
    <div className='min-h-[35vh] bg-[#252839] w-full text-white  flex px-[8vw] py-9 items-center justify-between '>

      <div className='w-1/2'>
        <h1 className="font-playfair text-[36px] font-[600] ">We don’t miss a pin!</h1>
        <h4 className='font-livvic'>We have a team of highly skilled, dedicated and innovative <span className='text-[#3CEDB7]'>software developers and digital marketing </span> professionals who consider every requirement of client as premium and put forward a flawless development.</h4>
      </div>
      <div className=''>
        <Image src={'/assets/icons/dots.png'} width={300} height={300}
        ></Image>
      </div>
    </div>
  )
}

export default Page3

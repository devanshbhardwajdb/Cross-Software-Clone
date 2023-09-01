import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-[8vw] min-h-[70vh] flex flex-col gap-5'>
      <div className=' font-livvic flex items-start pt-20  pb-6 justify-start gap-32 h-auto w-full border-b border-gray-400'>
        <div className='flex flex-col w-1/3 gap-32 '>
          <div className='w-full flex flex-col gap-5 '>
            <h4 className='text-[18px] pb-2 font-medium border-b border-gray-400'>Crossatlantic Newsletter</h4>
            <h4 className='text-[16px] font-normal text-gray-500'>Our updates right in your INBOX.</h4>
            <form className='relative btn-container flex flex-row border border-gray-400 items-center p-2 '>
              <input type="email" placeholder='Enter your email address' className='w-full bg-transparent' />
              <button type="submit" className='text-[20px] text-blue absolute top-50 right-4'><i className="ri-arrow-right-line "></i></button>
            </form>
          </div>
          <div className='text-[30px] flex gap-3'>
            <i className="ri-facebook-box-fill text-blue-700"></i>
            <i className="ri-twitter-fill text-blue-400"></i>
            <i className="ri-linkedin-box-fill text-blue-900"></i>
            <i className="ri-instagram-line text-red-400"></i>
          </div>

        </div>
        <div className='w-3/4  flex flex-col gap-8'>
          <div className='flex flex-row gap-8'>
            <Link href="#"><h4 className='text-[16px] footer-links'>Industries</h4></Link>
            <Link href="#"><h4 className='text-[16px] footer-links'>Case Study</h4></Link>
            <Link href="#"><h4 className='text-[16px] footer-links'>Insights</h4></Link>
            <Link href="#"><h4 className='text-[16px] footer-links'>About us</h4></Link>
            <Link href="#"><h4 className='text-[16px] footer-links'>Careers</h4></Link>
            <Link href="#"><h4 className='text-[16px] footer-links'>Contacts</h4></Link>
          </div>
          <div className='flex gap-5 w-full justify-start '>
            <div className='flex flex-col gap-3 w-1/2'>
              <h4 className='text-[18px] pb-2 font-medium border-b border-gray-400'>Other Links</h4>
              <Link href="#"><h4 className='text-[16px] footer-links'>Partner Network</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>Consultancy Services</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>Privacy Policy</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>Terms & Conditions</h4></Link>

            </div>
            <div className='flex flex-col gap-3 w-1/2'>
              <h4 className='text-[18px] pb-2 font-medium border-b border-gray-400'>Products</h4>
              <Link href="#"><h4 className='text-[16px] footer-links'>Inclite</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>My Military Rewards</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>Engage Ten-X</h4></Link>
              <Link href="#"><h4 className='text-[16px] footer-links'>Something Interesting</h4></Link>

            </div>
          </div>
          <div className='flex flex-row justify-between w-3/4'>
            <div>
              <h4 className='text-[16px] footer-links'>India</h4>
              <h4 className='text-[16px] font-normal text-gray-500'>(+91) 999 90 12521</h4>
            </div>
            <div>
              <h4 className='text-[16px] footer-links'>USA</h4>
              <h4 className='text-[16px] font-normal text-gray-500'>+1 (678) 472-9686</h4>
            </div>
            <div>
              <h4 className='text-[16px] footer-links'>Ireland</h4>
              <h4 className='text-[16px] font-normal text-gray-500'>(+353) 89 975 2995</h4>
            </div>
          </div>

        </div>

      </div>
      <div className="text-center flex justify-center items-center">
        <h4 className='text-[16px] font-normal text-gray-500'>© Copyright 2011-2023 Cross Atlantic Software Pvt. Ltd. All Rights Reserved.</h4>
      </div>
    </div>
  )
}

export default Footer

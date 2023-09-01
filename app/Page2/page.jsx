'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const Page2 = () => {

    useEffect(() => {
        const scrollButton1 = document.getElementById('btn-left');
        const scrollButton2 = document.getElementById('btn-right');
        const scrollBox = document.querySelector('.content');

        scrollButton1.addEventListener('click', () => {
            scrollButton1.style.border = "2px solid #7F7F7F"
            scrollButton1.style.color = "#7F7F7F"
            scrollButton2.style.border = "2px solid #000"
            scrollButton2.style.color = "#000"

            scrollBox.scrollLeft = 0;
        });
        scrollButton2.addEventListener('click', () => {

            scrollButton1.style.border = "2px solid #000"
            scrollButton1.style.color = "#000"
            scrollButton2.style.border = "2px solid #7F7F7F"
            scrollButton2.style.color = "#7F7F7F"

            scrollBox.scrollLeft = scrollBox.scrollWidth - scrollBox.clientWidth;
        });


    }, [])

    return (
        <div className='bg-white min-h-[100vh] py-24 flex flex-col gap-14 relative'>
            <div className='flex px-[8vw] justify-between items-center'>
                <div className='w-1/2'>
                    <h1 className=' text-[46px]  leading-[66px] font-playfair font-[1000]' >Simple yet agile <span className='underline-offset-8 underline'>blueprint</span> to better enterprise </h1>
                </div>
                <div className='flex gap-6'>
                    <button id='btn-left' className=' arrow-btn  border-black rounded-full w-20'><i className="ri-arrow-left-line text-[50px]"></i></button>
                    <button id='btn-right' className=' arrow-btn   rounded-full w-20'><i className="ri-arrow-right-line text-[50px]"></i></button>

                </div>
            </div>


            <div className='gap-10  overflow-x-scroll flex justify-between content'>

                <div className='font-livvic card-container flex flex-col gap-2'>
                    <Image src={'/assets/images/understand.jpg'} width={350} height={350} ></Image>
                    <h2 className='text-[25px] font-medium'>Comprehension</h2>
                    <h4>We get into your shoes to know your business better and work accordingly for an innovative leap</h4>
                </div>
                <div className='font-livvic card-container flex flex-col gap-2'>
                    <Image src={'/assets/images/strategize.jpg'} width={350} height={350} ></Image>
                    <h2 className='text-[25px] font-medium'>Analysis</h2>
                    <h4>We analyze cracked and potential zones and strategically form a viable action scheme for impressive mutation.</h4>
                </div>
                <div className='font-livvic card-container flex flex-col gap-2'>
                    <Image src={'/assets/images/create.jpg'} width={350} height={350} ></Image>
                    <h2 className='text-[25px] font-medium'>Action</h2>
                    <h4>From website design to optimization, we turn every stone that can make a marked difference in overall productivity.</h4>
                </div>
                <div className='font-livvic card-container flex flex-col gap-2'>
                    <Image src={'/assets/images/test.jpg'} width={350} height={350} ></Image>
                    <h2 className='text-[25px] font-medium'>Review</h2>
                    <h4>We are confident about our work quality but giving benefit of the doubt, we ensure to test the fruits of our efforts.</h4>
                </div>
                <div className='font-livvic card-container flex flex-col gap-2'>
                    <Image src={'/assets/images/improve.jpg'} width={350} height={350} ></Image>
                    <h2 className='text-[25px] font-medium'>Improvement</h2>
                    <h4>We settle on better than the best and make further improvements for an extraordinary service to our clients.</h4>
                </div>


            </div>

        </div>
    )
}

export default Page2

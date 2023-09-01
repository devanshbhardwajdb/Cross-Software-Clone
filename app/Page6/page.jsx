'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const Page6 = () => {

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
                    <h1 className='text-[46px]  leading-[66px] font-playfair font-[1000]'>Some happy notes from our <span className='underline-offset-8 underline'>clients!</span> </h1>
                </div>
                <div className='flex gap-6'>
                    <button id='btn-left' className=' arrow-btn  border-black rounded-full w-20'><i class="ri-arrow-left-line text-[50px]"></i></button>
                    <button id='btn-right' className=' arrow-btn   rounded-full w-20'><i class="ri-arrow-right-line text-[50px]"></i></button>

                </div>
            </div>


            <div className='gap-10  flex flex-row px-[8vw]'>
                <div className='flex flex-col gap-2 w-[450px] font-livvic items-center justify-start'>

                    <h4 className='border border-gray-300 text-gray-600 text-center p-6 text-[16px] leading-[24px]'>"Cross Atlantic introduced us to our own business in a completely different and innovative way that it surprised us about the potential it had. The cooperative staff of the firm blended with us so easily that we never felt that they are not us. So effortlessly they infused impeccable digital innovations in our organization that suddenly we got to witness many positive changes in the turnovers and the outcomes are still raining over us. We recommend every business to consider Cross Atlantic if they want a better version of their business that is much more viable and productive than before."</h4>

                    <Image src={"/assets/images/anurag-bansal.jpg"} width={100} height={100} className='rounded-full'></Image>
                    <h3 className='text-[18px] font-medium'>Anurag Bansal</h3>
                    <h3 className='text-[15px] font-medium text-gray-600'>(13D Global)</h3>
                </div>
                <div className='flex flex-col gap-2 w-[450px] font-livvic items-center justify-start'>

                    <h4 className='border border-gray-300 text-gray-600 text-center p-6 text-[16px] leading-[24px]'>"Cross Atlantic came to our rescue when we were ditched by three consultancy giants with an ordinary website. The fabulous staff of Cross Atlantic did a magic spell and presented a spectacular and amazing website to us which was far better than our expectations. We are thankful to the staff of Cross Atlantic and recommend it to every business looking for the best consultancy services."</h4>

                    <Image src={"/assets/images/teju-nageswari.jpg"} width={100} height={100} className='rounded-full'></Image>
                    <h3 className='text-[18px] font-medium'>Teju Nageswari</h3>
                    <h3 className='text-[15px] font-medium text-gray-600'>(nSmiles)</h3>
                </div>
                <div className='flex flex-col gap-2 w-[450px] font-livvic items-center justify-start'>

                    <h4 className='border border-gray-300 text-gray-600 text-center p-6 text-[16px] leading-[24px]'>"We are celebrating our success with Cross Atlantic for two years now and are more than happy to say that we owe this unanticipated growth and success of our business to this amazing firm. From concrete strategies to flawless results, they saw an unconventional and dedicated approach to each crack in our enterprises. We are extremely thankful to the humble and talented staff of Cross Atlantic and wish to be in a lifetime association with them."</h4>

                    <Image src={"/assets/images/pankaj-chaubey.jpg"} width={100} height={100} className='rounded-full'></Image>
                    <h3 className='text-[18px] font-medium'>Pankaj Chaubey</h3>
                    <h3 className='text-[15px] font-medium text-gray-600'>(PayNXT360)</h3>
                </div>


            </div>

        </div>
    )
}

export default Page6

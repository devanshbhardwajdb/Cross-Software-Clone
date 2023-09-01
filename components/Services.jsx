import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='flex  gap-6 mt-10 '>
            <div className='bg-[#F5F5F5] p-10 w-1/3 gap-8 flex flex-col'>
                <div className='text-black font-livvic flex gap-3 items-center'>
                    <Image src={'/assets/icons/consulting.svg'} width={70} height={70}></Image>
                    <h4 className='text-[20px] font-medium'>IT Consulting</h4>
                </div>
                <ul className=' flex flex-col  gap-3 text-[15px] font-normal font-livvic text-gray-600 '>
                    <li>API Integration</li>
                    <li>AWS</li>
                    <li>Cloud Computing Services</li>
                    <li>Artificial Intelligence</li>
                    <li>Content Management</li>
                    <li>Marketing Management</li>
                </ul>

            </div>
            <div className='bg-[#F5F5F5] p-10 w-1/3 gap-8 flex flex-col'>
                <div className='text-black font-livvic flex gap-3 items-center'>
                    <Image src={'/assets/icons/designing.svg'} width={70} height={70}></Image>
                    <h4 className='text-[20px] font-medium'>Application Development</h4>
                </div>
                <ul className=' flex flex-col  gap-3 text-[15px] font-normal font-livvic text-gray-600 '>
                    <li>Consumer-oriented software development




                    </li>
                    <li>High usability, responsive software design</li>
                    <li>Composable architecture implementation</li>
                    <li>Cross-platform software development</li>
                    <li>QA and testing strategy enablement</li>
                    <li>Integration, functional, and UI testing</li>
                </ul>

            </div>
            <div className='bg-[#F5F5F5] p-10 w-1/3 gap-8 flex flex-col'>
                <div className='text-black font-livvic flex gap-3 items-center'>
                    <Image src={'/assets/icons/application-development.svg'} width={70} height={70}></Image>
                    <h4 className='text-[20px] font-medium'>Designing</h4>
                </div>
                <ul className=' flex flex-col  gap-3 text-[15px] font-normal font-livvic text-gray-600 '>
                    <li>Product & Digital Innovation




                    </li>
                    <li>UX UI Design</li>
                    <li>Branding</li>
                    <li>Graphics & Illustrations</li>
                    <li>Wireframes/Prototyping</li>
                    <li>Packaging designing</li>
                </ul>

            </div>
        </div>
    )
}

export default Services

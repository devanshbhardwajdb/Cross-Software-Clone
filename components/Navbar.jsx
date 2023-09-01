
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

const Navbar = () => {

    useEffect(() => {

        const btn = document.querySelector(".nav-btn");
        const line1 = document.querySelector(".line1");
        const line2 = document.querySelector(".line2");
        const line3 = document.querySelector(".line3");
        const drop3 = document.querySelector(".drop3");


        btn.addEventListener('click', () => {
            drop3.classList.toggle("drop3-resp");
            line1.classList.toggle("line1-rot");
            line3.classList.toggle("line3-rot");
            line2.classList.toggle("line2-resp");


        })



    }, [])

    return (
        <>
            <div className='flex bg-white  justify-between items-center py-2 px-3 w-full fixed z-30 font-livvic'>

                <div className="image ">
                    <Image src={'https://www.crossatlanticsoftware.com/images/svgs/logo.svg'} width={220} height={220} />
                </div>
                <div className='flex justify-center items-center gap-10 '>
                    <div className='flex gap-12 px-5 font-medium'>
                        <Link href={"#"} className=' solution'>

                            <div className="flex">


                                <h4 className='hover:text-blue-700 transition-all duration-400'>IT Solutions</h4>
                                <i className="ri-arrow-down-s-fill"></i>
                            </div>
                            <div className=' drop1 flex flex-row  bg-white justify-start gap-[200px] items-start p-5 pt-10 px-36'>
                                <div className=' drop1-container flex flex-col gap-3'>
                                    <h2 className='text-xl'>Consultancy</h2>
                                    <Link href='#'><h4 >API Integration</h4></Link>
                                    <Link href='#'><h4 >AWS</h4></Link>
                                    <Link href='#'><h4 >Cloud Computing Services</h4></Link>
                                    <Link href='#'><h4 >Artificial Intelligence</h4></Link>
                                    <Link href='#'><h4 >Content Management</h4></Link>

                                </div>
                                <div className=' drop1-container flex flex-col gap-3'>
                                    <h2 className='text-xl'>Designing</h2>
                                    <Link href='#'><h4 >UX/UI Designing</h4></Link>
                                    <Link href='#'><h4 >Branding</h4></Link>
                                    <Link href='#'><h4 >Wireframes/Prototyping</h4></Link>
                                    <Link href='#'><h4 >Packaging Designing</h4></Link>
                                    <Link href='#'><h4 >Graphics & Illustration</h4></Link>

                                </div>
                                <div className=' drop1-container flex flex-col gap-3'>
                                    <h2 className='text-xl'>Digital Marketing
                                    </h2>
                                    <Link href='#'><h4 >Product & Digital Innovation</h4></Link>
                                    <Link href='#'><h4 >SEO/SMO/SMM</h4></Link>
                                    <Link href='#'><h4 >Online Advert Campaign</h4></Link>
                                    <Link href='#'><h4 >Content Writing</h4></Link>
                                    <Link href='#'><h4 >Landing Page Management</h4></Link>

                                </div>
                                <div className=' drop1-container flex flex-col gap-3'>
                                    <h2 className='text-xl'>Development
                                    </h2>
                                    <Link href='#'><h4 >Software Development</h4></Link>
                                    <Link href='#'><h4 >Website Development</h4></Link>
                                    <Link href='#'><h4 >E-Commerce Development</h4></Link>
                                    <Link href='#'><h4 >CMS Development</h4></Link>
                                    <Link href='#'><h4 >Mobile App Development</h4></Link>

                                </div>
                            </div>


                        </Link>
                        <Link href={"#"}><h4 className='hover:text-blue-700 transition-all duration-400'>Industries</h4></Link>
                        <Link href={"#"} className='corporate'>
                            <div className="flex">
                                <h4 className='hover:text-blue-700 transition-all duration-400'>Corporate</h4>
                                <i className="ri-arrow-down-s-fill"></i>
                            </div>
                            <div className=' drop2 flex flex-row  bg-white justify-start gap-[50px] items-start p-5 pt-10 px-20'>
                                <Image src={'/assets/images/corporate.jpg'} width={700} height={700}></Image>
                                <div className='flex flex-col gap-3 drop2-container'>
                                    <h2 className='text-xl'>Company</h2>
                                    <Link href='#'><h4 >About us</h4></Link>
                                    <Link href='#'><h4 >Team</h4></Link>
                                    <Link href='#'><h4 >Careers</h4></Link>
                                    <Link href='#'><h4 >Contacts</h4></Link>


                                </div>
                            </div>
                        </Link>
                        <Link href={"#"}><h4 className='hover:text-blue-700 transition-all duration-400'>Case Studies</h4></Link>
                        <Link href={"#"}><h4 className='hover:text-blue-700 transition-all duration-400'>Insights</h4></Link>
                    </div>




                    <div className='flex gap-10 px-5 items-center justify-center border-l border-gray-300'>
                        <Link href={'#'}>
                            <button>
                                <i className="ri-search-line font-thin  text-2xl" ></i>
                            </button>
                        </Link>


                        <button className='nav-btn '>
                            <div className="burger">
                                <div className="line line1 "></div>
                                <div className="line line2"></div>
                                <div className="line line3"></div>
                            </div>

                            <div className=' drop3   flex flex-row  bg-white justify-start gap-[300px] items-start p-5 pt-20 px-[20vw] w-full '>
                                <div className='flex flex-col justify-between gap-10'>
                                    <div className='flex flex-col justify-between w-full font-livvic gap-4'>
                                        <div className='flex flex-col items-start'>
                                            <h4 className='text-[16px] footer-links font-livvic'>India</h4>
                                            <h4 className='text-[16px] font-normal text-gray-500'>(+91) 999 90 12521</h4>
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h4 className='text-[16px] footer-links'>USA</h4>
                                            <h4 className='text-[16px] font-normal text-gray-500'>+1 (678) 472-9686</h4>
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h4 className='text-[16px] footer-links'>Ireland</h4>
                                            <h4 className='text-[16px] font-normal text-gray-500'>(+353) 89 975 2995</h4>
                                        </div>
                                    </div>
                                    <div className='text-[30px] flex gap-3'>
                                        <i className="ri-facebook-box-fill text-blue-700"></i>
                                        <i className="ri-twitter-fill text-blue-400"></i>
                                        <i className="ri-linkedin-box-fill text-blue-900"></i>
                                        <i className="ri-instagram-line text-red-400"></i>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5 drop2-container font-medium items-start'>


                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Partner Network</h4></Link>
                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Consultancy Services</h4></Link>
                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Contacts</h4></Link>
                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Insights</h4></Link>
                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Privacy Policy</h4></Link>
                                    <Link href='#'><h4 className='hover:text-blue-700 transition-all duration-400'>Terms & Conditions</h4></Link>


                                </div>
                            </div>
                        </button>
                        <Link href={'#'}>
                            <button className='flex gap-5 bg-[#1733E7] rounded-sm items-center justify-center px-5 py-2 hover:bg-[#252839] hover:text-[#3CEDB7] transition-all duration-300 text-white '>
                                <p className=''> Let's Talk</p>
                                <i className="ri-message-2-line text-2xl text-[#3CEDB7]" ></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar

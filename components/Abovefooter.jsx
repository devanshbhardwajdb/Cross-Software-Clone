import React from 'react'
import Image from 'next/image'

const Abovefooter = () => {
    return (
        <div className='min-h-[35vh] bg-[#252839] w-full text-white  flex px-[8vw] py-9 items-center justify-between '>

            <div className='w-1/2 flex flex-col gap-3'>
                <h1 className="font-playfair text-[36px] font-[600] ">#Crossatlantic: short glimpse
                    capsules of the future.</h1>
                <h4 className='font-livvic'>The strategizing procedures that assist us to traverse the unseen parts of enhanced digital opportunities that help us to reshape the moral design values with a powerful output. </h4>

                <button className=" insight-btn bg-transparent text-[#3CEDB7] flex items-center justify-between border-2 border-[#3CEDB7] py-2 px-10 w-[300px]">
                    <h4>View all the insights </h4>
                    <i className="ri-arrow-right-line text-[30px]"></i>
                    </button>
            </div>
            <div className=''>
                <Image src={'/assets/icons/dots.png'} width={300} height={300}
                ></Image>
            </div>
        </div>
    )
}

export default Abovefooter

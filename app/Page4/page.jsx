"use client"

import { useState } from 'react'
import Services from '@components/Services'
import Products from '@components/Products'
import Industries from '@components/Industries'


const Page6 = () => {
   const [services, setServices] = useState(true);
   const [products, setProducts] = useState(false);
   const [industries, setIndustries] = useState(false);


   
    
  return (
    <div className='px-[8vw] min-h-[80vh] bg-white'>

        <div className='flex flex-row gap-10 mt-14 font-medium font-livvic'>
            <button onClick={()=>{setServices(true); setProducts(false); setIndustries(false); }} className='text-[21px] text-gray-600 page6-btn' id='services-btn' ><h4 >Services</h4></button>
            <button onClick={()=>{setServices(false); setProducts(true); setIndustries(false); }} className='text-[21px] text-gray-600 page6-btn'  id='products-btn'><h4 >Products</h4></button>
            <button onClick={()=>{setServices(false); setProducts(false); setIndustries(true); }} className='text-[21px] text-gray-600 page6-btn'  id='industries-btn'><h4 >Industries</h4></button>
        </div>
        <>

        {services && <Services/>  }
        {products && <Products/> }
        {industries && <Industries/>}
        </>

        
    </div>
  )
}

export default Page6

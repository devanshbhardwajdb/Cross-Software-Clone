import React from 'react'


const Products = () => {
  return (
    <div>
      <div className='flex  gap-6 mt-10 '>
            <div className='bg-[#F5F5F5] p-10 w-1/3 gap-8 flex flex-col'>
                <div className='text-black font-livvic flex gap-3 items-center'>
                    
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
                    
                    <h4 className='text-[20px] font-medium'>Designing</h4>
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
                    
                    <h4 className='text-[20px] font-medium'>Application Development</h4>
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
        </div>
    </div>
  )
}

export default Products

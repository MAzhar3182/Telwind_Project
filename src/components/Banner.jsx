import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[80px]'>
      <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
<div className='text-xl md:text-3xl  md:p-[24px]'>
    Learn With Us
</div>
<h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow With Us</h2>
<div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
Learn
         <Typed
         className='pl-3'
                    strings={['Web Development','Application Development','Backend Development']}
                    typeSpeed={90}
                    loop={true}
                    backSpeed={50}
                />
</div>
<button className='bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

import React from 'react'
import imgx from "../assets/laptopmg.jpg"
export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
   <div className=' w-[72%] col-span-1 text-center'>
    <img src={imgx} alt='MyLaptop' className='inline'/>
   </div>
   <div className=' col-span-1 flex flex-col justify-center'>
    <h1 className='text-[#00df9a] font-bold my-2'>Learn From Experts</h1>
    <p className='my-2 text-justify'>Our teaching staff are leading experts in their subject areas with connections in industry, professional bodies, and non-governmental organisations (NGOs) around the world. They use their industry links, research, and discoveries to make sure you’re taught the most up-to-date topics.</p>
  <button className='w-[30%] mt-7 bg-black text-white p-3 rounded'>Get Started</button>
   </div>
    </div>
  )
}

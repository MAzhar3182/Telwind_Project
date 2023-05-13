import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
  <div className='max-w-[1240px] mx-auto md:flex justify-between py-[70px]'>
<div className='m-2' >
    <h1 className='text-[20px] md:text-[40px] mt-6 font-bold text-white'>Want to learn I.T Skills?</h1>
    <span className='text-white '>Sign Up to our Newsletter And Stay Up To Date.</span>
</div>
<div className='m-2'>
    <input type='text' placeholder='email' className='rounded mb-2 p-3 mr-2 text-slate-600'/>
    <button className='w-[30%] mt-7 bg-black text-white p-3 rounded'>Notify Me</button>
<br/>
<p className='text-white py-3'>We Care About The Protection of Data.Read Our <br/><a href='' className='text-black'>Privacy Policy</a></p></div>
  </div>
    </div>
  )
}

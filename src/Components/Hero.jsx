import React from 'react'

import '../index.css';

const Hero = () => {
  return (
    <section className=' hero bg-no-repeat h-screen bg-right-top bg-fixed'>

    <div className='p-20'>
      <h1 className='font-publicsans font-medium text-3xl text-dark-Blue mb-3'>Next generation <br /> 
      digital banking</h1>

      <p className='text-left pr-24 font-publicsans text-grayish-Blue'>Take your financial life online. Your Easybank account <br /> will be a one-stop-shop for spending, saving, <br />budgeting, investing, and much more.</p>

      <button className='h-9 w-32 text-[16px] border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-cyan-500 mt-10'>
      <a className='font-publicsans text-white'>Request invite</a>
      </button>
    </div>

    </section>
  )
}

export default Hero

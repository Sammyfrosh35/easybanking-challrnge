import React from 'react'
import  logo from "../assets/images/logo.svg"

const Nav = () => {
  return (
   <header className=' z-10 w-full' >
    <nav className='flex  items-center w-full bg-orange-300 h-16'>
    
    <div className='pl-20'>
      <a href="/">
      <img src={logo} alt="logo" width={130} height={29}  />
      </a>
</div>
      <ul className='flex-1 flex justify-center gap-5 items-center font-publicsans'>
      
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>

      <div className=' pr-28'>
        <button className='h-10 w-40 text-[16px]  border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-light-Grayish-Blue'>
          <a className='font-publicsans text-white'> Request invite</a>
        </button>
    </div>
       

    </nav>
   </header>
  )
}

export default Nav

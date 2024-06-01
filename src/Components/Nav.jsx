import React from 'react'
import  logo from "../assets/images/logo.svg"
import iconhamburger from "../assets/images/icon-hamburger.svg"
import '../index.css';

const Nav = () => {
  return (
   <header className=' z-10 w-full' >
    <nav className='flex  items-center w-full bg-white h-16'>
    
    <div className='pl-20'>
      <a href="/">
      <img src={logo} alt="logo" width={130} height={29}  />
      </a>
</div>
      <ul className='flex-1 flex justify-center gap-5 items-center font-publicsans font-medium max-lg:hidden'>
      
        <li><a href="" className='nav-link relative  px-4 py-4'>Home</a></li>
        <li><a href=""className='nav-link relative  px-4 py-4'>About</a></li>
        <li><a href=""className='nav-link relative  px-4 py-4'>Contact</a></li>
        <li><a href=""className='nav-link relative  px-4 py-4'>Blog</a></li>
        <li><a href=""className='nav-link relative  px-4 py-4'>Careers</a></li>
      </ul>

      <div className=' pr-28 max-lg:hidden'>
        <button className='h-10 w-40 text-[16px]  border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-light-Grayish-Blue'>
          <a className='font-publicsans text-white'> Request invite</a>
        </button>

        
    </div>

    <div className=' hidden max-lg:blocn?
    k'>
      <img src={iconhamburger}
      alt="ham" 
      width="24" 
      height="24"/>
    </div>
       

    </nav>
   </header>
  )
}

export default Nav

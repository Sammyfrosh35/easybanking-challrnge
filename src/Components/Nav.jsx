// import React from 'react'
// import  logo from "../assets/images/logo.svg"
// import iconhamburger from "../assets/images/icon-hamburger.svg"
// import '../index.css';

// const Nav = () => {
//   return (
//    <header className=' z-10 w-full' >
//     <nav className='flex  items-center w-full bg-white h-16'>
    
//     <div className='pl-20 max-lg:pl-2'>
//       <a href="/">
//       <img src={logo} alt="logo" width={130} height={29}  />
//       </a>
// </div>
//       <ul className='flex-1 flex justify-center gap-5 items-center font-publicsans font-medium max-lg:hidden'>
      
//         <li><a href="" className='nav-link relative  px-4 py-4'>Home</a></li>
//         <li><a href=""className='nav-link relative  px-4 py-4'>About</a></li>
//         <li><a href=""className='nav-link relative  px-4 py-4'>Contact</a></li>
//         <li><a href=""className='nav-link relative  px-4 py-4'>Blog</a></li>
//         <li><a href=""className='nav-link relative  px-4 py-4'>Careers</a></li>
//       </ul>

//       <div className=' pr-28 max-lg:hidden'>
//         <button className='h-10 w-40 text-[16px]  border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-light-Grayish-Blue'>
//           <a className='font-publicsans text-white'> Request invite</a>
//         </button>

        
//     </div>

//     <div className=' hidden max-lg:block ml-52'>
//       <img src={iconhamburger}
//       alt="ham" 
//       width="24" 
//       height="24"/>
//     </div>
       

//     </nav>
//    </header>
//   )
// }

// export default Nav

import React, { useState } from 'react';
import logo from "../assets/images/logo.svg";
import iconhamburger from "../assets/images/icon-hamburger.svg";
import iconclose from "../assets/images/icon-close.svg";
import '../index.css';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='z-10 w-full'>
      <nav className='flex items-center w-full bg-white h-16'>
        <div className='pl-20 max-lg:pl-2'>
          <a href="/">
            <img src={logo} alt="logo" width={130} height={29} />
          </a>
        </div>
        <ul className='flex-1 flex justify-center gap-5 items-center font-publicsans font-medium max-lg:hidden'>
          <li><a href="#" className='nav-link relative px-4 py-4'>Home</a></li>
          <li><a href="#" className='nav-link relative px-4 py-4'>About</a></li>
          <li><a href="#" className='nav-link relative px-4 py-4'>Contact</a></li>
          <li><a href="#" className='nav-link relative px-4 py-4'>Blog</a></li>
          <li><a href="#" className='nav-link relative px-4 py-4'>Careers</a></li>
        </ul>
        <div className='pr-28 max-lg:hidden'>
          <button className='h-10 w-40 text-[16px] border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-light-Grayish-Blue'>
            <a className='font-publicsans text-white'>Request invite</a>
          </button>
        </div>
        <div className='hidden max-lg:block ml-52'>
          <button onClick={toggleMobileMenu}>
            <img src={isMobileMenuOpen ? iconclose : iconhamburger} alt="menu icon" width="24" height="24" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='absolute top-16 m-5 left-0 w-full bg-white shadow-lg'>
          <ul className='flex flex-col items-center py-4 gap-3 font-publicsans'>
            <li><a href="#" className='nav-link py-2'>Home</a></li>
            <li><a href="#" className='nav-link py-2'>About</a></li>
            <li><a href="#" className='nav-link py-2'>Contact</a></li>
            <li><a href="#" className='nav-link py-2'>Blog</a></li>
            <li><a href="#" className='nav-link py-2'>Careers</a></li>
            <li>
              {/* <button className='h-10 w-40 mt-4 text-[16px] border-[2px] rounded-full bg-gradient-to-r from-lime-Green to-light-Grayish-Blue'>
                <a className='font-publicsans text-white'>Request invite</a>
              </button> */}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

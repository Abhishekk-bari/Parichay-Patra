import React from 'react'
import '../fonts/FoundersGrotesk-Semibold.ttf';
import '../fonts/fox_version_5_by_mickeyfan123_daxvfx5.ttf'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


function Footer() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="rounded-tl-3xl rounded-tr-3xl flex gap-20 w-full h-screen p-28  bg-[#5547ff] ">
      <div className="flex h-full flex-col text-white justify-between font-['foxversion5bymickeyfan123daxvfx5'] w-1/2">
      <div className='heading'>
      <h1 className='text-8xl'>Crafting,</h1>
      <h1 className='text-8xl '>Code Daily"</h1>
      </div>
      <div className="flex items-center justify-between pb-4 gap-4">
          <svg width="72" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 29.5L15 5H20L25 29.5H22.5L21 24H14L12.5 29.5H10Z" fill="currentColor"></path>
            <path d="M30 5H33V29.5H30V5ZM33 17.5C35 17.5 37 19.5 37 21.5C37 23.5 35 25.5 33 25.5H30V17.5H33Z" fill="currentColor"></path>
            <path d="M45 5H48V29.5H45V18C45 16 47 15 48 15H50V18H48V25.5H45V5Z" fill="currentColor"></path>
            <path d="M55 5H58V29.5H55V5Z" fill="currentColor"></path>
            <path d="M65 5H68V29.5H65V5Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      
      <div className="w-1/2 text-white ">
      <h1 className='text-[5vw] font-["foxversion5bymickeyfan123daxvfx5"]'>GET IN TOUCH</h1>
      <div className="font-['NeueMontrealRegular'] mt-20  ">
        <a className="block text-xl pb-2 underline" href="#">LinkedIN</a>
        <a className="block text-xl pb-2 underline" href="#">E-Mail</a>
        <a className="block text-xl pb-2 underline" href="#">Git-Hub</a>
        <a className="block text-xl pb-2 underline" href="#">Twitter</a>
        <a className="block text-xl pb-2 underline" href="#">Instagram</a>
        <a className="block text-xl pb-2 underline" href="#">Portfolio</a>
      </div>
      <p className="text-lg font-['NeueMontrealRegular'] pt-28">© 2024 Abhishek Bari. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;

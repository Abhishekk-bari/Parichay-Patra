import React from 'react';
import '../fonts/NeueMontreal-Regular.ttf'  //third step to use font

function Navbar() {
  return (
    <div className="w-full px-20 py-2 fixed flex justify-center font-['NeueMontrealRegular']">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full shadow-lg p-4 flex items-center">
        <div className="logo mr-40">
          <svg width="72" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 29.5L15 5H20L25 29.5H22.5L21 24H14L12.5 29.5H10Z" fill="currentColor"></path>
            <path d="M30 5H33V29.5H30V5ZM33 17.5C35 17.5 37 19.5 37 21.5C37 23.5 35 25.5 33 25.5H30V17.5H33Z" fill="currentColor"></path>
            <path d="M45 5H48V29.5H45V18C45 16 47 15 48 15H50V18H48V25.5H45V5Z" fill="currentColor"></path>
            <path d="M55 5H58V29.5H55V5Z" fill="currentColor"></path>
            <path d="M65 5H68V29.5H65V5Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="flex gap-10">
          {["About", "Projects", "Contact"].map((item, index) => (
            <a key={index} className="text-lg capitalize font-light">{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
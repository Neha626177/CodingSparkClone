import React from 'react';
import img from '../assets/logo.png'

const navbar = () => {
  return (
    <div className="w-screen py-[1.5rem] z-10 text-white bg-[#f66733]  fixed  flex  flex-row justify-center align-center">
      <div className="w-[1150px] flex flex-row  items-center ">
        <div className="w-1/2 ">
          <img className="w-16" src={img} alt="" />
        </div>
        <div className="w-1/2">
          <ul className="flex flex-row justify-end ">
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Home
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              About
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Events
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Course
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Team
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Team
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar

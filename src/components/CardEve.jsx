import React from 'react'
import CppImg from '../assets/c++.png'
// import './cardeve.css'

const CardEve = (props) => {

  return (
    <>
      <div className=" flex flex-col evecon -z-1 justify-center items-center p-10 border-[1px]  hover:bg-[#343148] ">
        <div className=" bg-[#F7CAC9] rounded-full ">
          <div className="bg-[#F7CAC9]  circle rounded-full p-1 animation-none">
            <img src={CppImg} className="w-[80px] mx-auto " alt="" />
          </div>
        </div>
        <h1 className="text-xl text-[#343148]">C++ Workshop</h1>
        <p className="text-center  text-[#7e7e81] hover:text-red">
          The workshop will introduce you to online training sessions of C++ for
          beginners.
        </p>
      </div>
    </>
  );
}

export default CardEve

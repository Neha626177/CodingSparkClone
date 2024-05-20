import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import './service.css'


const Cardser = (props) => {
   useEffect(() => {
     AOS.init({ duration: "1500" });
   });
  return (
    <>
      <div
        className=" w-full serCon -z-10 flex flex-col  items-center  border-[1px] gap-3 "
      >
        <div className="w-[100%] bg-[#F7CAC9] p-10">
          <h1 className="text-center text-3xl font-semibold ">{props.head}</h1>
          <p className="text-center p-2">
            <span className="text-4xl font-bold">₹{props.rs}</span>/Starting
            from Dec 1
          </p>
        </div>
        <div className="w-[100%]">
          <p className="text-center p-2"> 15 Days training program </p>
          <hr />
          <hr />
          <p className="text-center p-2">Cover all the topics of oops</p>
          <hr />
          <p className="text-center p-2">5 Days money back guarantee</p>
          <hr />
          <p className="text-center p-2">Live classes on Google meet</p>
          <hr />
          <p className="text-center p-2"> Class recording available</p>
          <hr />
        </div>

        <button className=" py-2 px-4  mb-5 transition duration-300 hover:text-[#F7CAC9] text-[#343148] bg-[#F7CAC9] hover:bg-[#343148] scroll-smooth">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Cardser

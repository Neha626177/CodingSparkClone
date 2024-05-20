import React from 'react'
import CppImg from "../assets/c++.png";



const Reviews = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center mt-[50px]">
        <div className=" flex flex-row justify-start items-center gap-2 ">
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
          <div>
            <p className="text-bold text-[#abaaad] ">Reviews</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold mb-10">
        Our Students Say!
      </h2>

      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 ">
        <div className=" flex flex-col justify-center items-center p-10 border-[1px]  bg-[#343148] gap-2">
          <img src="" alt="" />
          <h1 className="text-xl text-[#343148]">C++ Workshop</h1>
          <p className="text-center  text-white ">
            The teaching style is very good. They give attetion to each and
            every student which I like the most.
          </p>
          <p className="text-[#F7CAC9] text-[1.5rem]">Student Name </p>
          <p className="text-white"> Prince Kushwaha</p>
        </div>

        <div className=" flex flex-col justify-center items-center p-10 border-[1px]  bg-[#343148] gap-2">
          <img src="" alt="" />
          <h1 className="text-xl text-[#343148]">C++ Workshop</h1>
          <p className="text-center  text-white ">
            The teaching style is very good. They give attetion to each and
            every student which I like the most.
          </p>
          <p className="text-[#F7CAC9] text-[1.5rem]">Student Name </p>
          <p className="text-white">Prince Kushwaha</p>
        </div>

        <div className=" flex flex-col justify-center items-center p-10 border-[1px]  bg-[#343148] gap-2">
          <img src="" alt="" />
          <h1 className="text-xl text-[#343148]">C++ Workshop</h1>
          <p className="text-center  text-white ">
            The teaching style is very good. They give attetion to each and
            every student which I like the most.
          </p>
          <p className="text-[#F7CAC9] text-[1.5rem]">Student Name </p>
          <p className="text-white"> Prince Kushwaha</p>
        </div>
      </div>
      <div className="w-full h-[30px] flex flex-row justify-center items-center gap-2">
        <div className="w-3 h-3 bg-[#F7CAC9] rounded-full "></div>
        <div className="w-3 h-3 bg-[#343148] rounded-full "></div>
        <div className="w-3 h-3 bg-[#F7CAC9] rounded-full "></div>
        <div className="w-3 h-3 bg-[#F7CAC9] rounded-full "></div>
      </div>
    </>
  );
}

export default Reviews

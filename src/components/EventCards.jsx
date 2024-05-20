import React from 'react'
import CppImg from '../assets/c++.png'
import CardEve from './CardEve';

const EventCards = () => {
  return (
    <>
      <div className="w-full   flex flex-row justify-center items-center">
        <div className=" flex  flex-row justify-start items-center gap-2 ">
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
          <div>
            <p className="text-bold text-[#abaaad] ">Activities</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold mb-10">Events</h2>
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        <CardEve />
        <CardEve />
        <CardEve />
        <CardEve />
        <CardEve />
        <CardEve />
      </div>
    </>
  );
}

export default EventCards

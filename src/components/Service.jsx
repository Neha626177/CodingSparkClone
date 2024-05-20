import React, { useEffect } from 'react'
import CppImg from "../assets/c++.png";
import Cardser from './Cardser';
import AOS from "aos";
import "aos/dist/aos.css";
import { duration } from '@material-ui/core';


const Service = () => {

  useEffect(() => {
    AOS.init({duration : "500"});
  });
  return (
    <>
      <div
        className="w-full flex -z-10 flex-row justify-center items-center mt-[50px]"
        data-aos="zoom-in"
      >
        <div className=" flex flex-row -z-10 justify-start items-center gap-2 ">
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
          <div>
            <p className="text-bold text-[#abaaad] ">Service</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2
        className="text-center  text-3xl font-extrabold mb-10  -z-10"
        data-aos="zoom-in"
      >
        Service Available
      </h2>

      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Cardser head=" JAVASCRIT" rs="1999" data-aos="zoom-in" />
        <Cardser head="DSA WITH JAVA" rs="4199" data-aos="fade-up" />
        <Cardser head="OOPS WITH JAVA" rs="1999" data-aos="fade-up" />
      </div>
    </>
  );
}

export default Service

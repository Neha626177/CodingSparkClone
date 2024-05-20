import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Discunt = () => {

    useEffect(() => {
      AOS.init({ duration: "500" });
    });
  return (
    <>
      <section
        className="w-full  bg-fixed   discount h-[500px] mt-20"
        data-aos="zoom-in"
      >
        <div className="W-[80%] h-[100%]  flex flex-col justify-center items-center">
          <div className="w-[50%]  mx-auto flex flex-col justify-center items-center  gap-4">
            <p className="text-[#343148] text-2xl font-semibold">
              Awesome Discount
            </p>
            <h1 className="text-5xl text-[#343148] font-bold text-center">
              Get<span className="text-6xl text-red-700  mx-2">30%</span>
              Discount for all Classes
            </h1>
            <p className="text-center text-[#3d3d3f]">
              We offer exclusive offers, giveaways, and more when you sign up
              for our newsletter. Get up to 30% discount using the referrals and
              discount coupons provided in the newsletters
            </p>
            <button className="bg-[#343148] py-2 px-6 mr-4 text-[#F7CAC9] transition duration-300 hover:bg-white hover:text-black ">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discunt

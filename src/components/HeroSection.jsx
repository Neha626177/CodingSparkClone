import React from 'react'
import img from '../assets/landingPage.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-[#ff7242] my-[4rem] flex justify-center items-center">
      <div className=" w-[95%] h-[580px] flex flex-row justify-cente ">
        <div className="w-1/2 flex flex-col gap-3 justify-center ml-10">
          <p className="text-6xl text-[#343148] font-semibold  ">
            "Give a spark to your coding career with us."
          </p>
          <p className="text-[1.2rem] text-[#343148] ">
            An one-stop learning platform providing online coding courses to
            make you industry-ready.
          </p>
          <div>
            <button className="bg-[#343148] py-2 px-4 mr-4 text-[#F7CAC9] transition duration-300 hover:bg-white hover:text-black ">
              Contact Us
            </button>
            <button className="bg-[#343148] py-2 px-8 mr-4 text-[#F7CAC9]  transition duration-300 hover:bg-white hover:text-black">
              Course
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-end">
          <img className="w-[450px]" src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection

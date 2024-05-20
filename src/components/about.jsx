import React from 'react'
import img from '../assets/about.png'

const about = () => {
  return (
    <>
      <section className="w-full  my-[rem] flex justify-center items-center">
        <div className=" w-[95%] h-[580px] flex flex-row justify-center items-center  ">
          <div className=" flex flex-row ">
            <img className="w-[450px] h-[450px]" src={img} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
              <div>
                <p className="text-bold text-[#abaaad] ">About Us</p>
              </div>
              <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
            </div>
            <p className="text-3xl text-[#343148] font-semibold  ">
              Welcome to Coding Spark
            </p>
            <p className="text-[1.1rem] text-[#7e7e81] ">
              Our online learning platform offers courses that help students
              become good software developers, allowing them to get a head
              start. We strive to engage more students with technology and
              upskill them.
            </p>
            <p className="text-[1rem] text-[#7e7e81]">
              As a community with over 500 members, we help one another grow and
              contribute to the tech community. Mentorship is provided to cater
              to the needs of each student and give them personalized training.
            </p>
            <div>
              <button className="bg-[#343148] py-2 px-4 mr-4 transition duration-300 text-[#F7CAC9] hover:text-[#343148] hover:bg-[#F7CAC9] scroll-smooth">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about

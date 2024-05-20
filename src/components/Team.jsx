import React from 'react'
import './team.css'
import img1 from '../assets/sohit-img.png'
import img2 from '../assets/team-2.jpg'
import img3 from '../assets/aum-img.png'
import img4 from '../assets/amit-img.png'

const Team = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-center items-center mt-[50px]">
        <div className=" flex flex-row justify-start items-center gap-2 ">
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
          <div>
            <p className="text-bold text-[#abaaad] ">Team</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold mb-10">
        Meet Our Team
      </h2>

      <div className="w-[85%] mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* card1 */}
        {/* <div className=" bg-slate-900"> */}
          <div className=" flex  flex-col  justify-center items-center p-10 border-[1px] cursor-pointer  ">
            <img className="w-full hover:bg-slate-400" src={img1} alt="" />

            <h1 className="text-xl font-semibold mt-4 text-[#343148]">
              Sohit Kushwaha
            </h1>
            <p className="text-center  text-[#7e7e81] hover:text-red">
              Project Leader
            </p>
          {/* </div> */}
        </div>

        {/* //card */}
        <div className=" flex flex-col justify-center items-center p-10 border-[1px]  ">
          <img className="w-full" src={img2} alt="" />

          <h1 className="text-xl font-semibold mt-4 text-[#343148]">
            Jahanwee
          </h1>
          <p className="text-center  text-[#7e7e81] hover:text-red">
            SDE and Instructor
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center p-8 border-[1px]  ">
          <img className="w-full" src={img3} alt="" />

          <h1 className="text-xl font-semibold  text-[#343148]">Aum Simghal</h1>
          <p className="text-center  text-[#7e7e81] hover:text-red">
            Web Developer
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center p-8 border-[1px]  ">
          <img className="w-full" src={img4} alt="" />

          <h1 className="text-xl font-semibold  text-[#343148]">Amit Singh</h1>
          <p className="text-center  text-[#7e7e81] hover:text-red">
            UI/UX Designer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team

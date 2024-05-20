import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const footer = () => {
  return (
    <>
      <div className="w-full h-[400px] justify-center items-center foot mt-20 ">
        <div className="w-full h-[350px] con flex flex-col justify-center items-center gap-4">
          <h1 className="text-6xl font-bold text-[#16C6FE] ">Coding Spark </h1>
          <p className="text-white text-xl">
            15AB, Sikanderpur, Gurgaon, Haryana, INDIA
          </p>
          <p className="text-white text-xl">
            +91-8824432006 mail.codingspark@gmail.com
          </p>

          <div className="flex flex-row gap-2 ">
            <TwitterIcon className="text-white" />
            <FacebookIcon className="text-white" />
            <YouTubeIcon className="text-white" />
            <InstagramIcon className="text-white" />
            <LinkedInIcon className="text-white" />
          </div>
          <br />
          <hr className="bg-white" />
          <p className="text-white text-left">
            © Coding Spark, All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default footer;

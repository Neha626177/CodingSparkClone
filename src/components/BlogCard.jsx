import React, { useEffect, useState } from "react";
import blogimg from "../assets/blog1.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



const BlogCard = () => {

 const [title,setTitle] = useState(''); 
 
  const getTitle = async () => {
    try {
      const api =
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
      let response = await fetch(api);
      let data = await response.json();
      setTitle(data.text);
      // console.log(data.text);
      // console.log(title);
    } catch {
      console.log("Error found");
    }
  };

  // getTitle();
  useEffect(()=>{
    getTitle();
  },[])

 

  console.log(title);


  return (
    <div>
      <div className=" flex flex-col justify-center  border-[1px]  ">
        <img className="w-full mb-4" src={blogimg} alt="" />

        <h1 className="text-xl font-semibold  text-[#343148] pl-6">
          Lorem ipsum dolor
        </h1>
        <div className=" flex flex-row gap-2 pl-6  mb-2">
          <p> Tech Updates </p>
          <p>01-jan-2025 </p>
          <p>5</p>
        </div>
        <p className="pl-6 text-[#7e7e81] hover:text-red">
         {title}
        </p>
        <a
          className=" font-bold pl-6 my-2 text-[#343148] hover:text-[#F7CAC9] "
          href="#"
        >
          Read More{" "}
          <span>
            <ArrowForwardIosIcon className="text-[px]" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

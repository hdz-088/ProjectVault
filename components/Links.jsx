"use state";
import React from "react";
import { SiRefinedgithub } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

const Links = () => {
  return (
    <div className="p-4 gap-4 w-[90%] sm:w-[70%] md:w-[60%] border border-white text-center flex flex-row items-center justify-center text-white/80">
      {/* Github portfolio contact linkedin youtube */}
      <a href="#" className="text-4xl px-8 border border-1 border-white/80 ">
        <SiRefinedgithub />
      </a>
      <a href="#">
        <FaUserTie />
      </a>
      <a href="#">
        <IoMailOpen />
      </a>
      <a href="#">
        <GrLinkedinOption />
      </a>
      <a href="#">
        <FaYoutube />
      </a>
    </div>
  );
};

export default Links;

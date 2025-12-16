"use state";
import React from "react";
import { SiRefinedgithub } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";

const Links = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://github.com/hdz-088"
        target="_blank"
        className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg group"
      >
        <SiRefinedgithub size={24} />
      </a>
      <a
        href="https://hdzala.vercel.app/"
        target="_blank"
        className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg group"
      >
        <FaUserTie size={24} />
      </a>
      <a
        href="mailto:hdz088@outlook.com"
        target="_blank"
        className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg group"
      >
        <IoMailOpen size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/hdz088"
        target="_blank"
        className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg group"
      >
        <GrLinkedinOption size={24} />
      </a>
      <a
        href="https://instagram.com/hdz_088"
        target="_blank"
        className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg group"
      >
        <RiInstagramFill size={24} />
      </a>
    </div>
  );
};

export default Links;

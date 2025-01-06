"use state";
import React from "react";
import { SiRefinedgithub } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";

const Links = () => {
  return (
    <div className="socials">
      <a href="https://github.com/hdz-088" target="_blank">
        <SiRefinedgithub style={{ background: "#2c2c2cd5" }} />
      </a>

      <a href="https://hdzala.vercel.app/" target="_blank">
        <FaUserTie style={{ background: "#2c2c2cd5" }} />
      </a>
      <a href="mailto:hdz088@outlook.com" target="_blank">
        <IoMailOpen style={{ background: "#2c2c2cd5" }} />
      </a>
      <a href="https://www.linkedin.com/in/hdz088" target="_blank">
        <GrLinkedinOption style={{ background: "#2c2c2cd5" }} />
      </a>
      <a href="https://instagram.com/hdz_088" target="_blank">
        <RiInstagramFill style={{ background: "#2c2c2cd5" }} />
      </a>
    </div>
  );
};

export default Links;

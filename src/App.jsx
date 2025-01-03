import { useState } from "react";
import "./index.css";
import { MdOutlineCopyAll } from "react-icons/md";
import Links from "../components/Links";

function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-[#161616] gap-12">
      <div className="hero p-4 gap-4 w-[90%] sm:w-[70%] md:w-[60%] border border-white text-center">
        <img
          src="/skipper.png"
          className="h-32 z-10 mt-32 border-2 border-white rounded-full border-dashed transition duration-300 ease-in-out hover:border-solid"
        />
        <h1 className="text-4xl font-semibold">Harshdeepsinh Zala</h1>
        <p className="w-[70%] text-white/80">
          Student Developer learning MERN, Data Science and JAVA eager to step
          into the ever-changing world of Technology
        </p>
        <div className="flex flex-row mt-2 gap-8">
          <a
            href="https://drive.google.com/file/d/1LLHtmId7wi6zRWCz5_BH5VkniBkrx0X7/"
            className="px-4 py-2 bg-[#1c1c1c] border border-1 border-[#3d3d3d91] rounded-md text-white/80 transition ease-in-out duration-300 hover:border-[#4d4d4d] flex flex-row gap-2 text-sm items-center justify-center"
          >
            Resume
          </a>
          <a
            href="mailto:hdz088@outlook.com"
            className="px-4 py-2 bg-transparent border border-1 border-[#3d3d3d91] rounded-md text-white/80 transition ease-in-out duration-300 hover:border-[#4d4d4d] flex flex-row gap-2 text-sm items-center justify-center"
          >
            <MdOutlineCopyAll className="text-lg" />
            E-Mail
          </a>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default App;

"use state";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { LiaMarkdown } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiJupyter } from "react-icons/si";
import { GrJava } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

const cardData = [
  {
    title: "SOUNotes",
    description:
      "A website that contains material of BCA of Silver Oak University, with more than 5k page-views per month. Selected for Project Fair-3.0 (2024)",
    image: "/sounotes.png",
    technologies: [
      <RiNextjsFill />,
      <SiTailwindcss style={{ fill: "#38bdf8" }} />,
      <LiaMarkdown />,
    ],
    github: "https://github.com/hdz-088/SOUNotes-Next",
    externalLink: "https://sounotes.vercel.app/",
  },
  {
    title: "GitFinder",
    description:
      "View profile information of any GitHub user by just username. Made using GitHub API and hosted on Vercel",
    image: "/gitfinder.png",
    technologies: [
      <FaNodeJs style={{ fill: "#549f42" }} />,
      <SiTailwindcss style={{ fill: "#38bdf8" }} />,
      <TbApi />,
    ],
    github: "https://github.com/hdz-088/GitFinder",
    externalLink: "https://hdz-gitfinder.vercel.app/",
  },
  {
    title: "TimeBoxing",
    description:
      "A simple web-based tool that allows users to create, edit, and export time blocks. This project is built using HTML, CSS, JavaScript, and html2canvas.",
    image: "/timeboxing.png",
    technologies: [
      <RiJavascriptFill style={{ fill: "#f7df1e" }} />,
      <FaHtml5 style={{ fill: "#f16529" }} />,
      <FaCss3Alt style={{ fill: "#369cd6" }} />,
    ],
    github: "https://github.com/hdz-088/TimeBoxing",
    externalLink: "https://hdz-088.github.io/TimeBoxing/",
  },
  {
    title: "HDz (Portfolio Site)",
    description:
      "My portfolio site containing my details projects and blogs. Made with NextJS and Tailwind CSS. ",
    image: "/skipper.png",
    technologies: [
      <RiNextjsFill />,
      <SiTailwindcss style={{ fill: "#38bdf8" }} />,
      <LiaMarkdown />,
    ],
    github: "https://github.com/hdz-088/hdz",
    externalLink: "https://hdzala.vercel.app/",
  },
  {
    title: "myISRO (Working)",
    description:
      "A fan made site for ISRO. It is still under construction. Made by using NextJS, Tailwind CSS.",
    image: "/myisro.svg",
    technologies: [
      <RiNextjsFill />,
      <SiTailwindcss style={{ fill: "#38bdf8" }} />,
    ],
    github: "https://github.com/hdz-088/MyISRO",
    externalLink: "https://github.com/hdz-088/MyISRO",
  },
  {
    title: "Tabby",
    description:
      "A personal new home tab site. Contains a digital clock, weather(OpenWeather API) container and a dock containing my frequently used sites",
    image: "/skipper.png",
    technologies: [
      <RiJavascriptFill style={{ fill: "#f7df1e" }} />,
      <FaHtml5 style={{ fill: "#f16529" }} />,
      <FaCss3Alt style={{ fill: "#369cd6" }} />,
      <TbApi />,
    ],
    github: "https://github.com/hdz-088/Tabby",
    externalLink: "https://github.com/hdz-088/Tabby",
  },
  {
    title: "PM Modi's Speech WordCloud",
    description:
      "Speech analysis of Indian PM Narendra Modi given during Independence Day of 2024 using wordcloud library",
    image: "/pmmodi.png",
    technologies: [
      <FaPython style={{ fill: "#ffd545" }} />,
      <SiJupyter style={{ fill: "#f37726" }} />,
    ],
    github: "https://github.com/hdz-088/PM-Modi-s-Speech",
    externalLink: "https://github.com/hdz-088/PM-Modi-s-Speech",
  },
  {
    title: "StatPy",
    description: "Mean, Median Mode Finder using Python",
    image: "/skipper.png",
    technologies: [<FaPython style={{ fill: "#ffd545" }} />],
    github: "https://github.com/hdz-088/StatPy",
    externalLink: "https://github.com/hdz-088/StatPy",
  },
  {
    title: "TaskMatrix",
    description:
      "A to-do website based on Eisenhower Matrix, in which you can drag and drop tasks between different tabs",
    image: "/taskmatrix.png",
    technologies: [
      <RiJavascriptFill style={{ fill: "#f7df1e" }} />,
      <FaHtml5 style={{ fill: "#f16529" }} />,
      <FaCss3Alt style={{ fill: "#369cd6" }} />,
    ],
    github: "https://github.com/hdz-088/TaskMatrix",
    externalLink: "https://hdz-088.github.io/TaskMatrix/",
  },
  {
    title: "SpaceEx",
    description:
      "A responsive and animated solar system information website. Made by using HTML, CSS only",
    image: "/spaceex.png",
    technologies: [
      <FaHtml5 style={{ fill: "#f16529" }} />,
      <FaCss3Alt style={{ fill: "#369cd6" }} />,
    ],
    github: "https://github.com/hdz-088/SpaceEx",
    externalLink: "https://hdz-088.github.io/SpaceEx/",
  },
  {
    title: "Snapster",
    description:
      "Snapster is a responsive photography studio site containing works and information of the studio.",
    image: "/snapster.png",
    technologies: [
      <FaHtml5 style={{ fill: "#f16529" }} />,
      <FaCss3Alt style={{ fill: "#369cd6" }} />,
    ],
    github: "https://github.com/hdz-088/SpaceEx",
    externalLink: "https://hdz-088.github.io/Snapster/",
  },
  {
    title: "Python Mini Projects",
    description:
      "I have created this repo to add all the programs I have made while I was learning Python",
    image: "/python.png",
    technologies: [<FaPython style={{ fill: "#ffd545" }} />],
    github: "https://github.com/hdz-088/Python-Mini-Projects",
    externalLink: "https://github.com/hdz-088/Python-Mini-Projects",
  },
  {
    title: "C++ Mini Projects",
    description:
      "I have created this repo to add all the programs I have made while I was learning C++",
    image: "/cpp.png",
    technologies: [<TbBrandCpp style={{ stroke: "#5e97d0" }} />],
    github: "https://github.com/hdz-088/CPP-Mini-Projects",
    externalLink: "https://github.com/hdz-088/CPP-Mini-Projects",
  },
  {
    title: "Java Mini Projects",
    description:
      "I have created this repo to add all the programs I have made while I was learning Java",
    image: "/java.png",
    technologies: [<GrJava style={{ stroke: "#ed2024" }} />],
    github: "https://github.com/hdz-088/Java-Mini-Projects",
    externalLink: "https://github.com/hdz-088/Java-Mini-Projects",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col gap-6">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center w-full border border-[#3d3d3d91] px-4 py-2 gap-10 justify-around rounded-lg bg-[#1c1c1c] transition ease-in-out duration-500 hover:bg-[#2c2c2cd5] hover:border-[#3d3d3d] group cursor-pointer"
        >
          <img src={item.image} alt="icon" width={90} />
          <div className="w-3/4 flex flex-col gap-2">
            <p className="text-left font-bold text-xl">{item.title}</p>
            <p className="text-white/60 text-justify text-sm font-light">
              {item.description}
            </p>
            <div className="text-2xl flex flex-row gap-4 transition ease-in-out duration-500  opacity-40 group-hover:opacity-100">
              {item.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 text-2xl transition ease-in-out duration-500  opacity-40 group-hover:opacity-100">
            <a href={item.github} target="_blank">
              <FaGithub />
            </a>
            <a href={item.externalLink} target="_blank">
              <FiExternalLink />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

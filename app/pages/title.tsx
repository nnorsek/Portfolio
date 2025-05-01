"use client";

import javascript from "../../public/images/javascript.png";
import react from "../../public/images/react.png";
import git from "../../public/images/git.png";
import java from "../../public/images/java.webp";
import node from "../../public/images/node.webp";
import html from "../../public/images/html.webp";
import css from "../../public/images/css.png";
import sql from "../../public/images/sql.png";
import azure from "../../public/images/azure.png";
import next from "../../public/images/next.png";
import typescript from "../../public/images/typescript.png";
import springboot from "../../public/images/springboot.png";
import { FaArrowDown } from "react-icons/fa6";
import ButtonRound from "../components/buttonRound";
import Typewriter from "../components/Typewriter";

export default function Title() {
  return (
    <div className="">
      <div className="pt-60">
        <div className="justify-self-center">
          <p className="text-xl pb-10 font-bold">HI THERE, I'M</p>
          <h1 className="font-extrabold mx-auto text-8xl tracking-tight pb-5">
            Nicholas Norsek
          </h1>
          <p className="py-10 text-xl">
            <Typewriter
              words={[
                "SOFTWARE DEVELOPER",
                "FRONTEND DEVELOPER",
                "BACKEND DEVELOPER",
                "WEB ENGINEER",
              ]}
            />
          </p>
          <p className="text-xl text-wrap w-100 text-white pb-20">
            I'm a full stack software developer, focusing on building creative
            and functional websites.
          </p>
          <ButtonRound>
            View My Work{" "}
            <FaArrowDown className="inline ml-1 mb-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          </ButtonRound>
        </div>
        <div className="mt-50 ml-50">
          <h1 className="text-6xl ml-50 italic">Technologies I Use..</h1>
          <div className="mt-10 flex flex-wrap w-200 gap-x-10 gap-y-7 pt-10">
            {[
              { src: html.src, label: "HTML" },
              { src: css.src, label: "CSS" },
              { src: git.src, label: "Git" },
              { src: javascript.src, label: "JavaScript" },
              { src: react.src, label: "React" },
              { src: java.src, label: "Java" },
              { src: node.src, label: "Node.js" },
              { src: sql.src, label: "SQL" },
              { src: azure.src, label: "Azure" },
              { src: next.src, label: "Next.js" },
              { src: typescript.src, label: "TypeScript" },
              { src: springboot.src, label: "SpringBoot" },
            ].map(({ src, label }, index) => (
              <div
                key={index}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-blue-400 to-pink-400 hover:from-pink-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-40 h-40 flex flex-col items-center justify-center rounded-xl bg-[#1a1a1a]">
                  <img src={src} alt={label} className="w-28 h-28" />
                  <span className="text-white text-sm mt-2 font-semibold">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

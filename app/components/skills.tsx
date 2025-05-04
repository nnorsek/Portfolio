import React from "react";
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
import Image from "next/image";
const Skills = () => {
  return (
    <div className="mt-40 px-8 py-12 w-full max-w-6xl mx-auto bg-black/40 shadow-xl rounded-lg">
      <h1 className="text-4xl pl-20">Tech Stack</h1>
      <div className="mt-5 flex flex-wrap w-180 gap-x-10 gap-y-7 pt-10 ">
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
            <div className="w-30 h-30 flex flex-col items-center justify-center rounded-xl bg-[#1a1a1a]">
              <Image src={src} alt={label} width={68} height={68} />
              <span className="text-white text-sm mt-2 font-semibold">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

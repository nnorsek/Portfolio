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
    <section
      className="w-full px-4 sm:px-10 md:px-20 lg:px-40 py-10 flex flex-col lg:flex-row gap-8"
      id="aboutSection"
    >
      {/* Tech Stack */}
      <div className="w-full lg:w-1/2 px-6 py-8 bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white/90 text-center mb-8">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-xl bg-[#1a1a1a]">
                <Image src={src} alt={label} width={50} height={50} />
                <span className="text-white text-xs sm:text-sm mt-2 font-semibold text-center">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Me */}
      <div className="w-full lg:w-1/2 px-6 py-8 bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white/90 text-center mb-8">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed indent-10 text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed indent-10 text-white/80 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    </section>
  );
};
export default Skills;

"use client";
import background_image from "../images/background_image.jpg";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import git from "../images/git.png";
import java from "../images/java.webp";
import node from "../images/node.webp";
import html from "../images/html.webp";
import css from "../images/css.png";
import sql from "../images/sql.png";
import azure from "../images/azure.png";
import next from "../images/next.png";
import typescript from "../images/typescript.png";
import springboot from "../images/springboot.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisable, setIsVisable] = useState(false);
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisable(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[1300px] w-full overflow-hidden">
        <img
          src={background_image.src}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#1d1d1d] z-0" />

        <div className="relative z-10 px-10 pt-40 justify-items-center">
          <h1
            className={` font-extrabold text-6xl transition-opacity duration-1000 ${
              isVisable ? "opacity-100 animate-slide-in-top" : "opacity-0"
            }`}
          >
            Hello, I'm Nicholas Norsek.
          </h1>
          <p className="animate-slide-in-top mt-50 text-4xl font-medium max-w-3xl text-center">
            "I'm a software developer focusing on creative, efficient, and
            reliable websites."
          </p>

          <div className="mt-50 flex flex-wrap w-200 gap-x-10 gap-y-7 mx-auto pt-10">
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

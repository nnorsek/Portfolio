"use client";

import { FaArrowDown } from "react-icons/fa6";
import ButtonRound from "../components/buttonRound";
import Typewriter from "../components/Typewriter";
import Skills from "../components/skills";

export default function Title() {
  return (
    <div className="">
      <div className="pt-60">
        <div className="justify-self-center">
          <p className="text-xl pb-10 font-bold">HI THERE, I&apos;M</p>
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
            I&apos;m a full stack software developer&apos; focusing on building
            creative and functional websites.
          </p>
          <ButtonRound>
            View My Work{" "}
            <FaArrowDown className="inline ml-1 mb-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          </ButtonRound>
        </div>
        <Skills />
      </div>
    </div>
  );
}

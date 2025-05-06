"use client";

import ButtonRound from "../components/buttonRound";
import Typewriter from "../components/Typewriter";
import { FaEnvelope, FaFile } from "react-icons/fa6";

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
          <div className="flex gap-x-5">
            <ButtonRound bgColor="bg-red-600" textColor="text-white">
              Resume <FaFile className="pl-1.5 mt-1" />
            </ButtonRound>
            <ButtonRound bgColor="bg-white" textColor="text-black">
              Contact
              <FaEnvelope className="pl-1.5 mt-0.5 text-2xl" />
            </ButtonRound>
          </div>
        </div>
      </div>
      <div id="aboutSection" />
    </div>
  );
}

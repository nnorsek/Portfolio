"use client";

import ButtonRound from "../components/buttonRound";
import Typewriter from "../components/Typewriter";
import { FaEnvelope, FaFile } from "react-icons/fa6";

export default function Title() {
  return (
    <div className="">
      <div className="pt-60">
        <div className="justify-self-center">
          <p className="text-4xl pb-10 font-bold sm:text-5xl md:text-6xl">
            HI THERE👋 I&apos;M
          </p>
          <h1 className="font-extrabold mx-auto text-9xl tracking-tight pb-5">
            Nicholas Norsek
          </h1>
          <p className="py-10 text-3xl">
            <Typewriter
              words={[
                "SOFTWARE DEVELOPER",
                "FRONTEND DEVELOPER",
                "BACKEND DEVELOPER",
                "WEB ENGINEER",
              ]}
            />
          </p>
          <p className="text-2xl text-wrap w-130 text-white pb-20">
            I&apos;m a full stack software developer&#44; focusing on building
            <i> creative</i> and <i> functional</i> websites.
          </p>
          <div className="flex gap-x-5">
            <ButtonRound
              bgColor="bg-red-600"
              textColor="text-white"
              href="/images/diploma.pdf"
              download="Nicholas-Norsek-Resume.pdf"
              openAndDownload={true}
            >
              Resume <FaFile className="pl-1.5 mt-1" />
            </ButtonRound>
            <ButtonRound
              bgColor="bg-white"
              textColor="text-black"
              href="mailto:nicknorsek01@gmail.com"
              download={undefined}
            >
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

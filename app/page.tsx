"use client";
import Image from "../public/images/image_website_template.png";
import Button from "./components/button";
import Title from "./pages/title";
import Header from "./pages/header";
import { useIsVisible } from "./functions/useIsVisible";
import { useRef } from "react";
export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  return (
    <main>
      <div>
        <Title />
        <div className="p-10">
          <div
            ref={ref2}
            className={`mt-40 flex items-start gap-4 transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100 animate-slide-in-left " : "opacity-0"
            } `}
          >
            <div className="h-130 w-340 shadow-2xl hover:cursor-pointer bg-blue-800">
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="ml-[-2em] flex flex-col w-full h-full">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5"></div>
            </div>
          </div>
          <div
            ref={ref1}
            className={`flex flex-row-reverse mt-70 items-start gap-4 transition-opacity ease-in duration-700 ${
              isVisible1 ? "opacity-100 animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div
              className={` 130 w-200 shadow-2xl hover:cursor-pointer bg-blue-800 relative`}
            >
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="-mr-250 ml-70 flex flex-col w-full h-full relativ">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5"></div>
            </div>
          </div>
          <div className="mt-70 flex items-start gap-4">
            <div className="h-130 w-340 shadow-2xl hover:cursor-pointer bg-blue-800">
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="ml-[-2em] flex flex-col w-full h-full">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

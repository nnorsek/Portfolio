"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "../functions/useIsVisible";
import imgSrc from "../../public/images/image_website_template.png";
import Button from "./button";

interface ProjectCardProps {
  reverse?: boolean;
  title: string;
  description: string;
  text: string;
  href: string;
  techUsed: string[];
}

export default function ProjectCard({
  reverse = false,
  title,
  description,
  text,
  href,
  techUsed,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`py-10 flex flex-col md:flex-row items-center gap-10 transition-opacity ease-in duration-700 ${
        isVisible
          ? `opacity-100 ${
              reverse ? "animate-slide-in-right" : "animate-slide-in-left"
            }`
          : "opacity-0"
      } ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image section */}
      <div className="relative w-full md:w-1/2 max-w-xl">
        <div className="absolute inset-0 translate-x-5 translate-y-5 bg-blue-800 rounded-xl shadow-lg z-0" />
        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <Image
            src={imgSrc}
            alt="website-template"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Text section */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center ${
          reverse ? "items-end text-right" : "items-start text-left"
        } z-10`}
      >
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4 w-140">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-4 w-200">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techUsed.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-700 text-sm text-blue-200 px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <Button text={text} href={href} />
      </div>
    </div>
  );
}

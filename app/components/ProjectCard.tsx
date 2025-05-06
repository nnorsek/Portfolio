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
}

export default function ProjectCard({
  reverse = false,
  title,
  description,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`py-10 flex flex-col md:flex-row items-center md:items-start gap-10 transition-opacity ease-in duration-700 ${
        isVisible
          ? `opacity-100 ${
              reverse ? "animate-slide-in-right" : "animate-slide-in-left"
            }`
          : "opacity-0"
      } ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image with background effect */}
      <div className="relative w-full max-w-xl">
        {/* Blue background offset */}
        <div className="absolute inset-0 translate-x-5 translate-y-5 bg-blue-800 rounded-xl shadow-lg z-0" />
        {/* Image container */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <Image
            src={imgSrc}
            alt="website-template"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-center max-w-xl ${
          reverse ? "justify-items-end" : "text-left"
        } md:text-left z-10`}
      >
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-6">
          {description}
        </p>
        <div>
          <Button text="View Project" href="https://github.com/nnorsek" />
        </div>
      </div>
    </div>
  );
}

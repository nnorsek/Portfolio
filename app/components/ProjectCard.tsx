"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "../functions/useIsVisible";
import imgSrc from "../../public/images/image_website_template.png";

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
      className={`mt-40 flex items-start gap-4 transition-opacity ease-in duration-700 ${
        isVisible ? "opacity-100 animate-slide-in-left" : "opacity-0"
      } ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="h-130 w-340 shadow-2xl hover:cursor-pointer bg-blue-800 relative">
        <Image
          src={imgSrc}
          alt="website-template"
          className="w-140 pl-5 py-15"
        />
      </div>
      <div className="ml-[-2em] flex flex-col w-full h-full">
        <h2 className="font-bold text-6xl pb-2">{title}</h2>
        <p className="mt-1.5 w-70 h-70 font-bold text-2xl">{description}</p>
      </div>
    </div>
  );
}

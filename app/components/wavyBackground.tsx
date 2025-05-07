"use client";
import React from "react";

const WavyBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black animate-gradient opacity-60"></div>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-700 rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
    </div>
  );
};

export default WavyBackground;

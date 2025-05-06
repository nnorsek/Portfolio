import React from "react";

const wavyBackground = () => {
  return (
    <div>
      {/* 🔵 Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Colorful animated gradient */}
        <div className="absolute w-full h-full animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-50"></div>

        {/* Multiple animated SVG waves */}
        <svg
          className="absolute top-0 left-0 w-[200%] h-[300px] animated-wave"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#632dc8" // pink
            fillOpacity="0.5"
            d="M0,160 C360,100 1080,220 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>

        <svg
          className="absolute top-10 left-0 w-[200%] h-[300px] animated-wave delay-1000"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#4e2dc8" // violet
            fillOpacity="0.4"
            d="M0,192 C480,160 960,240 1440,192 L1440,320 L0,320 Z"
          ></path>
        </svg>

        <svg
          className="absolute top-20 left-0 w-[200%] h-[300px] animated-wave delay-2000"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a78bfa" // light purple
            fillOpacity="0.3"
            d="M0,224 C600,200 840,280 1440,224 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default wavyBackground;

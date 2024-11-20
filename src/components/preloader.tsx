"use client";

import React, { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { useRouter } from "next/navigation";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // To handle fade-out
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of loading
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsVisible(false); // Trigger fade-out
        setTimeout(() => {
          router.push("/"); // Redirect to the home page or another route
        }, 1000); // Ensure fade-out animation completes before navigation
      }, 500); // Delay before fade-out starts
    }
  }, [progress, router]);

  return (
    <div
      className={`h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white fixed top-0 left-0 z-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
      }`}
    >
      {/* Animated Gradient Circle */}
      <div
        className="absolute w-[200%] h-[200%] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-10 rounded-full animate-pulse"
        style={{ zIndex: -1 }}
      ></div>

      {/* Number Ticker */}
      <div className="flex items-center justify-center">
        <NumberTicker
          value={progress}
          className="text-8xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          decimalPlaces={0}
        />
        <span className="text-8xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 ml-1">
          %
        </span>
      </div>
    </div>
  );
};

export default Preloader;

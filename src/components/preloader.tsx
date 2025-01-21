"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const taglines = [
  "Sabar sebentar ya wo, lagi loading...",
  "Sabar ya...",
  "Tapi tunggu dulu, jangan terburu-buru...",
  "Chef sedang memasak...",
  "Ksbar!",
  "Kiw kiw kiw kiw",
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // For fade-out effect
  const [randomTagline, setRandomTagline] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Set a random tagline on initial render
    setRandomTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust loading speed
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsVisible(false); // Trigger fade-out
        setTimeout(() => {
          router.push("/"); // Navigate after fade-out
        }, 1000);
      }, 500);
    }
  }, [progress, router]);

  return (
    <div
      className={`h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-black fixed top-0 left-0 z-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "linear-gradient(to top right, #1a202c, #000)" }}
    >
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div
            className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute w-[300px] h-[300px] border-[3px] border-dashed border-gray-700 rounded-full animate-spin"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute w-[200px] h-[200px] border-[2px] border-solid border-gray-600 rounded-full animate-spin-reverse"
            style={{ animationDuration: "6s" }}
          ></div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Progress Circle */}
        <div className="w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full">
            <circle
              className="text-gray-800"
              cx="50%"
              cy="50%"
              r="45%"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            ></circle>
            <circle
              className="text-blue-500"
              cx="50%"
              cy="50%"
              r="45%"
              stroke="currentColor"
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              strokeLinecap="round"
              fill="none"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            ></circle>
          </svg>
          <span className="absolute text-xl font-bold text-white">
            {progress}%
          </span>
        </div>

        {/* Random Tagline */}
        <p className="text-sm text-gray-400 mt-4 tracking-widest">
          {randomTagline}
        </p>
      </div>
    </div>
  );
};

export default Preloader;

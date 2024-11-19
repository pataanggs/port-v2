"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);

  // Dynamically calculate the height of the timeline
  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const contentHeight = ref.current.scrollHeight; // Total height of the timeline content
        setTotalHeight(contentHeight);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight); // Recalculate height on window resize
    return () => window.removeEventListener("resize", calculateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Adjust offset to match scrolling behavior
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, totalHeight]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Map over the timeline data */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Sticky Title Section */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-t from-indigo-500 to-blue-200 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br border border-neutral-300 dark:border-neutral-700 p-2 bg-black/50" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            {/* Timeline Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Line */}
        <div
          style={{
            height: `${totalHeight}px`, // Dynamically set the height of the line
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-neutral-300 dark:bg-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform, // Animate height dynamically
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

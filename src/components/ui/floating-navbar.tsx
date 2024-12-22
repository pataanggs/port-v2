"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const router = useRouter();

  const handleNavigation = (link: string) => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      router.push(link); // Navigate after the transition
      setIsTransitioning(false); // Reset the transition state
    }, 1800); // Match stairs transition duration
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            className="fixed inset-0 z-[9999] bg-black"
          >
            {[...Array(10)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute h-full bg-gradient-to-b from-black via-slate-700 to-black"
                style={{
                  width: "10%", // Make each step 10% of the width
                  left: `${index * 10}%`, // Offset each step horizontally
                }}
                initial={{ y: "-100%" }} // Start off-screen (top)
                animate={{ y: 0 }} // Move down into view
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Delay each step for the stair-stepping effect
                  ease: "easeInOut",
                }}
              ></motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-neutral-700 rounded-full dark:bg-neutral-900 bg-neutral-50 shadow-md dark:shadow-lg z-[5000] px-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map(
          (
            navItem: {
              name: string;
              link: string;
              icon?: JSX.Element;
            },
            idx: number
          ) => (
            <button
              key={`link=${idx}`}
              onClick={() => handleNavigation(navItem.link)}
              className={cn(
                "relative flex items-center justify-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-200"
              )}
            >
              <span className="block sm:hidden mx-3">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium tracking-wide">
                {navItem.name}
              </span>
            </button>
          )
        )}

        <Button variant="ghost" size="icon" className="ml-3 relative">
          <Sun
            className="h-[1.2rem] w-[1.2rem] scale-0 rotate-0 transition-all dark:scale-100"
            onClick={() => setTheme("light")}
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:scale-0 transition-all"
            onClick={() => setTheme("dark")}
          />
        </Button>
      </motion.div>
    </>
  );
};

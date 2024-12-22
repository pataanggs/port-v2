import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { BriefcaseBusiness, House, Images, PenTool } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <House size={20} />,
  },
  {
    name: "About",
    link: "/about",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Images size={20} />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <PenTool size={20} />, // Replaced with a pen icon for relevance
  },
];

const Navbar = () => {
  return (
    <div className="relative w-full z-50">
      {/* Floating Navbar */}
      <FloatingNav
        navItems={navItems}
        className="w-fit mx-auto p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-full shadow-lg backdrop-blur-md flex gap-6"
      />
    </div>
  );
};

export default Navbar;

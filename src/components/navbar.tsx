import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { BriefcaseBusiness, House, Images } from "lucide-react";

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
    icon: <Images size={20} />, // Add a relevant icon here
  },
];

const Navbar = () => {
  return (
    <div className="relative w-full ">
      <FloatingNav navItems={navItems} className="w-fit" />
    </div>
  );
};

export default Navbar;

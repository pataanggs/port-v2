import React from "react";
import FloatICon from "./float-icon";
import Wasteless from "@/assets/wasteless.png";
import DieselDragrace from "@/assets/dieseldragrace.webp";
import Porto from "@/assets/porto.png";
import Porto2 from "@/assets/porto2.png";
import TheForestKeeper from "@/assets/TheForestKeeper.jpg";
import PahawangWeb from "@/assets/pahawang.png";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GridBackground = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 select-none">
          My Projects
        </p>
        <a href="https://github.com/pataanggs" target="_blank" className="flex">
          <GitHubLogoIcon
            width={24}
            height={24}
            className="z-50 -translate-y-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
          />
        </a>
      </div>

      <FloatICon
        source={Wasteless}
        title="Wasteless"
        link="https://github.com/Aziz097/WasteLess"
        range={100}
      />
      <FloatICon
        source={DieselDragrace}
        title="Diesel Drag Race"
        link="https://github.com/urbaee/Diesel-Drag-Race"
        range={200}
      />
      <FloatICon
        source={Porto}
        title="Portofolio v1  "
        link="hhttps://github.com/pataanggs/port"
        range={300}
      />
      <FloatICon
        source={Porto2}
        title="Portofolio v2"
        link="https://github.com/pataanggs/port-v2"
        range={400}
      />
      <FloatICon
        source={TheForestKeeper}
        title="The Forest Keeper"
        link="https://malasngodingco.itch.io/the-forest-keeper"
        range={500}
      />
      <FloatICon
        source={PahawangWeb}
        title="Pahawang Website"
        link="https://pahawang.my.id"
        range={500}
      />
    </div>
  );
};

export default GridBackground;

import React, { useEffect, useState, FC } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";




interface FloatIConProps {
  title: string;
  link: string;
  source: string | StaticImageData;
  range?: number;
}

const generateRandomValues = (range: number) => {
  const values = Array(4)
    .fill(0)
    .map(() => (Math.random() - 0.5) * 2 * range);
  values.push(values[0]);
  return values;
};

const FloatICon: FC<FloatIConProps> = ({ title, link, source, range }) => {
  const [showMenu, setShowMenu] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!showMenu) {
      const randomXValues = generateRandomValues(range || 200); // Adjust the range as needed
      const randomYValues = generateRandomValues(range || 200);

      controls.start({
        x: randomXValues,
        y: randomYValues,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 24,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
    ()=>controls.stop()
  }, [showMenu, controls, range]);

  const menuContainerVariants = {
    initial: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const menuItemsVariants = {
    initial: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handlePress = () => {
    if (showMenu){
      setShowMenu(false)
      return
    }
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <motion.div
      style={{ x, y, willChange: "transform" }}
      animate={controls}
      onClick={handlePress}
      className="w-fit h-fit rounded-full  flex items-center justify-center absolute p-3 dark:bg-white/20 bg-black/10 z-40 "
    >
      <Image src={source} alt="" width={30} height={30} className="" />   
      
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuContainerVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="absolute w-[200%] h-fit top-full left-full shadow-lg text-slate-50"
          >
            <ul className="flex flex-col space-y-2 ">
              <motion.li
                variants={menuItemsVariants}
                className="font-medium text-sm tracking-wider w-full bg-slate-900 rounded-xl px-3 py-2 cursor-default z-50 text-ellipsis overflow-clip"
              >
                {title}
              </motion.li>
              <motion.li
                variants={menuItemsVariants}
                whileHover={{
                  x: 20,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="font-medium text-sm tracking-wider w-full bg-blue-500 rounded-xl px-3 py-2 z-50"
                onClick={handleCloseMenu}
              >
                <a
                  href={link}
                  target="_blank"
                  className="w-full h-full flex justify-between items-center"
                >
                  Explore
                  <svg
                    viewBox="0 0 1024 1024"
                    className="icon"
                    width={16}
                    height={16}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#eee4e4"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                        fill="#eee4e4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </motion.li>
              <motion.li
                variants={menuItemsVariants}
                whileHover={{
                  x: 20,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="font-medium text-sm tracking-wider w-full h-full bg-red-500 rounded-xl px-3 py-2 flex justify-between items-center cursor-pointer z-50"
                onClick={handleCloseMenu}
              >
                Cancel
                <svg
                  viewBox="0 0 64 64"
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="4"
                  stroke="#eee4e4"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
                    <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
                  </g>
                </svg>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatICon;

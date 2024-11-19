import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import React, { ReactElement } from "react";




const LinkIcon = ({ link, icon,ismail=false }: { link?: string; icon?: ReactElement;ismail?:boolean }) => {
  return (
    <>
    {
      ismail ? (
        <a href={`mailto:${link}`} className="w-6 h-6">{icon}</a>
      ):(
        <a href={link} target="_blank" className="w-6 h-6">
        {icon}
        </a>
      )
    }
    </>
  )
};

const containerVariants = {
  initial: {
    x: 20,
    opacity: 0,

    transition: {
      duration: 0.3,
      ease: "easeIn",
      staggerChildren: 0.3,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 2,
      ease: "easeIn",
      staggerChildren: 0.3,
    },
  },
};

const ContactBar = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="fixed sm:top-[20%] bottom-[10%] right-0 w-10 h-fit z-50 bg-gray-200 dark:bg-[#0c0c0c] rounded-l-lg p-3 shadow-md flex-col items-center space-x-1"
    >
      <LinkIcon icon={<GitHubLogoIcon className="hover:scale-150 duration-100 ease-in"/>} link="https://github.com/pataanggs" />
      <LinkIcon icon={<InstagramLogoIcon className="hover:scale-150 duration-100 ease-in"/>} link="https://www.instagram.com/Pataangg" />
      <LinkIcon icon={<LinkedInLogoIcon className="hover:scale-150 duration-100 ease-in"/>} link="https://www.linkedin.com/in/kartagamafathan" />
     
      <LinkIcon icon={<MailIcon className="hover:scale-150 duration-100 ease-in h-4 w-4"/>} link="kartagama.fathan@gmail.com" ismail={true} />
    </motion.div>
  );
};

export default ContactBar;

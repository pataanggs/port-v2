  "use client";

  import { motion } from "framer-motion";
  import React from "react";
  import { AuroraBackground } from "@/components/ui/aurora-background";
  import { TypewriterEffect } from "@/components/ui/typewriter-effect";
  import StyleButton from "@/components/style-button";
  import { ArrowRight } from "lucide-react";
  import { useRouter } from "next/navigation";


  function Home() {

    const router = useRouter()

    React.useEffect(()=>{
      document.title="Portfolio | Home"
    },[])

    return (
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center h-full px-4 py-24  mt-20"
        >
          
          <TypewriterEffect
            words={words}
            className="text-2xl md:text-5xl font-bold text-center font-pregular"
            cursorClassName="bg-indigo-700"
          />
          <p className="text-[30px] sm:text-base font-normal text-center dark:text-gray-400 text-slate-800/90  leading-normal">
          I &apos;m an Informatics Engineering Student at Institute Technology of Sumatera. I am passionate about technology and programming. I love to learn new things and always try to improve myself. 
          </p>
          
          <StyleButton
              text="Read About Me"
              icon={<ArrowRight size={20} className="mx-auto" />}
              onPress={() => router.push("/about")}
            />
        

        
          
        </motion.div>
      </AuroraBackground>
    );
  }

  const words = [ 
    {
      text: "Fathan",
      className: "text-indigo-500 dark:text-indigo-400 text-[1.6em] text-bold",
    },
    {
      text: "Kartagama",
      className: "text-indigo-500 dark:text-indigo-400 text-[1.6em] text-bold ",
    },
  ];

  export default React.memo(Home);

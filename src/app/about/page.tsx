"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/lib/data";
import StyleButton from "@/components/style-button"; // Assuming this is your custom button component
import { Download } from "lucide-react"; // Using an icon for the download button

const About = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  React.useEffect(() => {
    document.title = "Portfolio | About";
  }, []);

  return (
    <div
      className="h-auto w-full relative overflow-clip flex-col items-center"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        className="fixed top-24 w-full"
      />

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          This Is About, <br /> Fathan Kartagama a.k.a Pataangg.
        </h2>
        <p className="max-w-4xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-justify">
          As a passionate third-year Informatics Engineering student at ITERA, I
          am deeply engaged in coding and specialize in developing efficient and
          innovative software solutions. With a solid foundation in both
          front-end and back-end technologies, I excel in creating dynamic and
          responsive web applications. My skill set includes working with
          programming languages like JavaScript, Python, and frameworks such as
          React and Node.js. I am also proficient in database management
          systems, including MongoDB and SQL. I am committed to continuous
          learning and staying updated with industry advancements, enabling me
          to implement cutting-edge technologies in my projects.
        </p>

        {/* CV Download Button */}
        <div className="mt-6">
          <a
            href="../../public/CV Fathan Andi.pdf "
            download="Fathan_Kartagama_CV.pdf"
          >
            <StyleButton
            text="Download CV"
            icon={<Download size={20} className="mx-auto" />}
            onPress={() => {}}
            />
          </a>
        </div>
      </BackgroundLines>

      <Timeline data={data} />
    </div>
  );
};

export default React.memo(About);

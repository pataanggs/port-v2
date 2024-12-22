import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython,FaJava, FaPhp} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiPostgresql, SiTypescript, SiTailwindcss, SiThreedotjs, SiLaravel, SiCplusplus, SiCsharp, SiBlender, SiAdobephotoshop, SiAdobelightroom, SiDavinciresolve} from "react-icons/si";
import MeteorCard from "@/components/meteor-card";
import { motion } from "framer-motion";

const calculateAge = (birthYear: number) => new Date().getFullYear() - birthYear;

const data = [
  {
    title: "Personal",
    content: (
      <div>
        <MeteorCard
          content={
            <div>
              <h1 className="text-xl pb-4">Fathan Kartagama</h1>
              <p className="info text-justify" style={{ textTransform: "none" }}>
                (2004 - {new Date().getFullYear()}) Age: {calculateAge(2004)}
              </p>
              <p className="info text-justify" style={{ textTransform: "none" }}>Coding & Online Gaming</p>
              <p className="info text-justify" style={{ textTransform: "none" }}>Nationality: Indonesia</p>
              <p className="info text-justify" style={{ textTransform: "none" }}>Languages: Indonesian, English</p>
            </div>
          }
        />
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div className="flex flex-col gap-4">
        {/* First Card */}
        <MeteorCard
          content={
            <div>
              <h1 className="text-xl text-center">Institut Teknologi Sumatera</h1>
              <h1 className="text-l text-center">(ITERA)</h1>
              <p className="info text-justify" style={{ textTransform: "none" }}>
                <strong>2022 - Present</strong>
              </p>
              <p className="info text-justify" style={{ textTransform: "none" }}>
                Currently pursuing a degree in Informatics Engineering. Engaged
                in advanced coursework and projects related to software
                development, data structures, algorithms, and modern programming
                practices.
              </p>
            </div>
          }
        />

        {/* Second Card */}
        <MeteorCard
          content={
            <div>
              <h1 className="text-xl text-center">96 Senior High School Jakarta</h1>
              <p className="info text-center">
                <strong>2019 - 2022</strong>
              </p>
              <p className="info text-justify" style={{ textTransform: "none" }}>
                Completed senior high school focusing on science and technology.
                Participated in various extracurricular activities and projects
                related to programming and technology.
              </p>
            </div>
          }
        />
      </div>
    ),
  },
  {
    title: "Skills",
    content: (
      <div className="flex flex-col gap-4">
        {/* Frontend Section */}
        <MeteorCard
  content={
    <div>
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        {/* Frontend Skill Icons */}
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaHtml5 className="text-4xl text-orange-500" />
          <p className="text-sm">HTML5</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaCss3Alt className="text-4xl text-blue-500" />
          <p className="text-sm">CSS3</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaJs className="text-4xl text-yellow-500" />
          <p className="text-sm">JavaScript</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaReact className="text-4xl text-blue-400" />
          <p className="text-sm">React</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiNextdotjs className="text-4xl text-black" />
          <p className="text-sm">Next.js</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiTypescript className="text-4xl text-blue-600" />
          <p className="text-sm">TypeScript</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaBootstrap className="text-4xl text-purple-500" />
          <p className="text-sm">Bootstrap</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiTailwindcss className="text-4xl text-teal-500" />
          <p className="text-sm">TailwindCSS</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiThreedotjs className="text-4xl text-gray-500" />
          <p className="text-sm">Three.js</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaNodeJs className="text-4xl text-green-600" />
          <p className="text-sm">Node.js</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiMongodb className="text-4xl text-green-500" />
          <p className="text-sm">MongoDB</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiMysql className="text-4xl text-blue-600" />
          <p className="text-sm">MySQL</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiPostgresql className="text-4xl text-blue-500" />
          <p className="text-sm">PostgreSQL</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaPhp className="text-4xl text-purple-500" />
          <p className="text-sm">PHP</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiLaravel className="text-4xl text-red-500" />
          <p className="text-sm">Laravel</p>
        </motion.div>

      {/* Programming Languages Section */}
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaPython className="text-4xl text-yellow-400" />
          <p className="text-sm">Python</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiCplusplus className="text-4xl text-blue-500" />
          <p className="text-sm">C++</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiCsharp className="text-4xl text-blue-500" />
          <p className="text-sm">C#</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <FaJava className="text-4xl text-red-600" />
          <p className="text-sm">Java</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiBlender className="text-4xl text-gray-500" />
          <p className="text-sm">Blender</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiAdobephotoshop className="text-4xl text-blue-500" />
          <p className="text-sm">Photoshop</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiAdobelightroom className="text-4xl text-blue-500" />
          <p className="text-sm">Lightroom</p>
        </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
          <SiDavinciresolve className="text-4xl text-blue-500" />
          <p className="text-sm">Davinci Resolve</p>
        </motion.div>
  
      </div>
    </div>
  }
/>
      </div>
    ),
  },
  
  {
    title: "Learning Journey",
    content: (
      <div className="flex flex-col gap-4">
        <MeteorCard
          content={
            <div>
              <h1 className="text-xl font-bold pb-2">My Learning Journey</h1>
              <p className="info text-justify" style={{ textTransform: "none" }}>
                I am currently focused on learning advanced web development skills, including React,
                Next.js, and TypeScript. I am also diving into backend technologies like Node.js and
                databases such as MongoDB and PostgreSQL. My journey is driven by a curiosity to
                constantly improve and explore new domains.
              </p>
            </div>
          }
        />
      </div>
    ),
  },
  

];

export { data };
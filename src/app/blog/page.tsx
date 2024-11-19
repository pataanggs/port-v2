"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const blogs = [
  {
    id: 1,
    title: "Understanding React's Virtual DOM",
    description: "A deep dive into how React’s Virtual DOM works and why it matters.",
    date: "November 20, 2024",
    link: "/blog/react-virtual-dom",
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox",
    description: "A comprehensive guide to deciding between CSS Grid and Flexbox for layout design.",
    date: "November 18, 2024",
    link: "/blog/css-grid-vs-flexbox",
  },
];

const BlogPage = () => {
  const ref = React.useRef(null);

  // UseScroll for header animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <AuroraBackground>
      <div
        ref={ref}
        className="min-h-screen py-10 px-4 relative flex flex-col items-center"
      >
        {/* Motion Title */}
        <motion.h1
          className="text-5xl p-6 md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-indigo-500"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-700 dark:text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore my latest articles and tutorials.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid gap-10 mt-12 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="relative p-6 border rounded-lg shadow-md bg-gradient-to-br from-gray-800 to-gray-900 dark:from-neutral-800 dark:to-neutral-900 hover:shadow-xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2, // Stagger animation for each blog
                duration: 0.6,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
              <h2 className="text-2xl font-semibold text-white">{blog.title}</h2>
              <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
              <p className="text-gray-300 mt-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-indigo-400 hover:text-indigo-300 font-medium mt-4 block"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
};

export default BlogPage;

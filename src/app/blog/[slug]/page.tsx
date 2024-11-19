"use client";

import { useParams } from "next/navigation";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts: { [key: string]: { title: string; content: string } } = {
    "react-virtual-dom": {
      title: "Understanding React's Virtual DOM",
      content:
        "React's Virtual DOM is a concept used to improve the performance of web applications. It is a lightweight copy of the real DOM that allows React to make updates faster by calculating the changes required before applying them to the real DOM. This approach minimizes direct DOM manipulations, making applications more efficient and responsive.",
    },
    "css-grid-vs-flexbox": {
      title: "CSS Grid vs Flexbox",
      content:
        "CSS Grid and Flexbox are powerful layout systems in CSS, but they serve different purposes. Flexbox is one-dimensional and ideal for laying out items in a row or column, while CSS Grid is two-dimensional, allowing for more complex layouts involving both rows and columns. Understanding the strengths and use cases of each helps developers create more flexible and maintainable designs.",
    },  
  };
  
  
  const post = blogPosts[slug.toString()];

  if (!post) {
    return <div className="text-center mt-10">Post Not Found</div>;
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-300">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

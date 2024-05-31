"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/component/blogs/BlogCard";
import BlogForm from "@/component/blogs/BlogForm";

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`https://fuad-talukder-backend.vercel.app/blogs`);
    const data = await res.json();
    setAllBlogs(data);
  };

  useEffect(() => {
    const fetchDataAndRepeat = async () => {
      await fetchData();
      setTimeout(fetchDataAndRepeat, 5000);
    };

    fetchDataAndRepeat();

    return () => clearTimeout("");
  }, []);

  return (
    <div>
      <BlogForm />
      {allBlogs ? <BlogCard allBlogs={allBlogs} /> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPage;

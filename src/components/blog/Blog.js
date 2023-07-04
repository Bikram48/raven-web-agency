import React from "react";
import "./blog.css";
import { tiktok, dance, wallpaint } from "./imports.js";
import { BlogProvider } from "../../context/GlobalContext";
import BlogCard from "./blogcard/BlogCard";

export default function Blog() {
  const value = {
    category: "Techno",
    title: "Lorem ipsum",
    date: "07/04/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit",
  };
  return (
    <div className="raven__blog container section__padding" id="news">
      <div className="raven__blog-title text__center title__margin">
        <h3>Blog</h3>
      </div>
      <div className="raven__blog-cards">
        <BlogProvider value={value}>
          <BlogCard image={tiktok} />
          <BlogCard image={dance} />
          <BlogCard image={wallpaint} />
        </BlogProvider>
      </div>
    </div>
  );
}

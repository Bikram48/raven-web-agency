import React, { useContext } from "react";
import { BlogContext } from "../../../context/GlobalContext";
import "./blogcard.css";

export default function BlogCard({ image }) {
  const { category, title, date, content } = useContext(BlogContext);
  return (
    <div className="raven__blog-cards_content">
      <div className="raven__blog-card_image">
        <img src={image} alt="" />
        <button>{category}</button>
      </div>
      <div className="raven__blog-card_body">
        <p className="raven__blog-card_date">{date}</p>
        <p className="raven__blog-card_title">{title}</p>
        <p className="raven__blog-card_text">{content}</p>
      </div>
    </div>
  );
}

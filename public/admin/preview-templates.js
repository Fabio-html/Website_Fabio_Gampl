import React from "react";
import "../style.css"; // <- das ist dein CSS

const BlogPreview = ({ entry, widgetFor }) => {
  return (
    <div>
      <h1>{entry.getIn(["data", "title"])}</h1>
      <div>{widgetFor("body")}</div>
    </div>
  );
};

export default BlogPreview;
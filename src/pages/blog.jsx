import React from "react";
import SEO from "../common/seo";
import Blog from "../components/blog-pages/blog";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - blog"} />
      <Blog />
    </>
  );
};

export default index;

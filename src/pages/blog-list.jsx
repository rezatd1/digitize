import React from "react";
import SEO from "../common/seo";
import BlogList from "../components/blog-pages/blog-list";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Blog list"} />
      <BlogList />
    </>
  );
};

export default index;

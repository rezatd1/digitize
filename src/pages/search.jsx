import React from "react";
import SEO from "../common/seo";
import Search from "../components/search";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Search"} />
      <Search />
    </>
  );
};

export default index;

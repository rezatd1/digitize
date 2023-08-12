import React from "react";
import SEO from "../common/seo";
import Portfolio from "../components/portfolios/portfolio";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Portfolio"} />
      <Portfolio />
    </>
  );
};

export default index;

import React from "react";
import SEO from "../common/seo";
import PortfolioDetails from "../components/portfolio-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Portfolio Details"} />
      <PortfolioDetails />
    </>
  );
};

export default index;

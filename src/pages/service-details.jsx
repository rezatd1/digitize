import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Service Details"} />
      <ServiceDetails />
    </>
  );
};

export default index;

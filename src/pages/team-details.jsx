import React from "react";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Digitize - Team Details"} />
      <TeamDetails />
    </>
  );
};

export default index;

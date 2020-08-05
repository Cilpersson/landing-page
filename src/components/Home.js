import React from "react";
import { Navigation } from "./Navigation";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionThree } from "./SectionThree";

export const Home = () => {
  return (
    <>
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

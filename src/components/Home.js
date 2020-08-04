import React from "react";
import { Navigation } from "./Navigation";
import { SectionWrapper } from "../lib/stylesheet";

export const Home = () => {
  return (
    <>
      <Navigation />
      <SectionWrapper background="rgb(42, 42, 44)"></SectionWrapper>
      <SectionWrapper background="rgb(255, 255, 255)"></SectionWrapper>
      <SectionWrapper background="rgb(219, 100, 88)"></SectionWrapper>
    </>
  );
};

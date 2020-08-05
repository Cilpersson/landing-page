import React from "react";
import { Navigation } from "./Navigation";
import { SectionWrapper } from "../lib/stylesheet";
import { Button } from "./Button";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";

export const Home = () => {
  const white = "rgb(255, 255, 255)";
  const red = "rgb(219, 100, 88)";

  return (
    <>
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <SectionWrapper background={red}>
        <Button
          fontSize="1rem"
          text="Tilbage til toppen"
          color={white}
          top="0.6rem"
          center="0.5rem"
          bottom="0.4rem"
        />
      </SectionWrapper>
    </>
  );
};

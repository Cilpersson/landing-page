import React from "react";
import { SectionWrapper, SectionTitle, SmallSubTitle } from "../lib/stylesheet";
import { Button } from "./Button";
import { SignUpForm } from "./SignUpForm";

export const SectionThree = () => {
  const white = "rgb(255, 255, 255)";
  const red = "rgb(219, 100, 88)";
  return (
    <SectionWrapper background={red}>
      <SectionTitle color={white}>
        Få 10 gode råd om digital transformation
      </SectionTitle>
      <SmallSubTitle>
        Ja tak, jeg vil gerne høre mer om digital transformation
      </SmallSubTitle>
      <SignUpForm />
      <Button
        fontSize="1rem"
        text="Tilbage til toppen"
        color={white}
        top="0.6rem"
        center="0.5rem"
        bottom="0.4rem"
      />
    </SectionWrapper>
  );
};

import React from "react";
import { Link } from "react-scroll";
import {
  SectionWrapper,
  SectionTitle,
  SmallSubTitle,
  Paragraph,
  Filler,
} from "../lib/stylesheet";
import { ButtonDots } from "./ButtonDots";
import { SignUpForm } from "./SignUpForm";
import { Prize } from "../assets/Prize";

export const SectionThree = () => {
  const white = "rgb(255, 255, 255)";
  const red = "rgb(239, 90, 81)";

  return (
    <SectionWrapper background={red}>
      <SectionTitle color={white}>
        Få 10 gode råd om digital transformation
      </SectionTitle>
      <SmallSubTitle>
        Ja tak, jeg vil gerne høre mer om digital transformation
      </SmallSubTitle>
      <Filler height="50px" />
      <SignUpForm />
      <Prize color={white} height="100" />
      <Paragraph>Pentia vinder pris for digital inovation 2017</Paragraph>
      <Link smooth={true} to="sectionOne">
        <ButtonDots
          fontSize="1rem"
          text="Tilbage til toppen"
          color={white}
          top="0.6rem"
          center="0.5rem"
          bottom="0.4rem"
        />
      </Link>
    </SectionWrapper>
  );
};

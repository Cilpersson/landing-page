import React from "react";
import { Navigation } from "./Navigation";
import {
  SectionWrapper,
  Title,
  SmallSubTitle,
  Paragraph,
  WrapperCol,
  ParagraphBold,
} from "../lib/stylesheet";
import { Zeppeliner } from "../assets/Zeppeliner";
import { DownButton } from "./DownButton";

export const Home = () => {
  const white = "rgb(255, 255, 255)";
  const darkGrey = "rgb(42, 42, 44)";
  const red = "rgb(219, 100, 88)";

  return (
    <>
      <Navigation />
      <SectionWrapper background={darkGrey}>
        <WrapperCol>
          <Zeppeliner color={white} />
          <Title>Digital transformation</Title>
          <SmallSubTitle>Rådgivning. Implementering. Resultater.</SmallSubTitle>
          <Paragraph>
            Man kan fremad se, at de har været udset til at læse, at der skal
            dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og
            de kan optimeres fra oven af at formidles stort uden brug fra
            optimering af presse. I en kant af landet går der blandt om, at de
            vil sætte den over forbehold for tiden. Vi flotter med et hold, der
            vil rundt og se sig om i byen.
          </Paragraph>
        </WrapperCol>
        <WrapperCol>
          <ParagraphBold>Start din rejse her</ParagraphBold>
          <DownButton />
        </WrapperCol>
      </SectionWrapper>
      <SectionWrapper background={white}></SectionWrapper>
      <SectionWrapper background={red}></SectionWrapper>
    </>
  );
};

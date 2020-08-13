import React from "react";
import { Link } from "react-scroll";
import {
  SectionWrapper,
  Title,
  SmallSubTitle,
  Paragraph,
  WrapperCol,
} from "../lib/stylesheet";
import { Zeppeliner } from "../assets/Zeppeliner";
import { ButtonDots } from "./ButtonDots";
import { VideoPlayer } from "./VideoPlayer";
import { ImageHero } from "./ImageHero";

const white = "rgb(255, 255, 255)";
const darkGreyTrans = "rgb(42, 42, 44, 0.8)";

export const SectionOne = () => {
  return (
    <>
      <ImageHero />
      <VideoPlayer />
      <SectionWrapper
        id="sectionOne"
        background={darkGreyTrans}
        padding="6rem 5rem 1rem"
      >
        <Zeppeliner color={white} />
        <WrapperCol>
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
        <Link smooth={true} to="sectionTwo">
          <ButtonDots
            fontSize="1rem"
            text="Start din rejse her"
            color={white}
            top="0.4rem"
            center="0.5rem"
            bottom="0.6rem"
          />
        </Link>
      </SectionWrapper>
    </>
  );
};

import React from "react";
import { Navigation } from "./Navigation";
import {
  SectionWrapper,
  Title,
  SectionTitle,
  SmallSubTitle,
  Paragraph,
  WrapperCol,
  WrapperImages,
} from "../lib/stylesheet";
import { Zeppeliner } from "../assets/Zeppeliner";
import { ImageOne } from "../assets/ImageOne";
import { ImageTwo } from "../assets/ImageTwo";
import { Button } from "./Button";
import { TransformationCard } from "./TransformationCard";

export const Home = () => {
  const white = "rgb(255, 255, 255)";
  const darkGrey = "rgb(42, 42, 44)";
  const red = "rgb(219, 100, 88)";
  const black = "rgb(27, 27, 29)";

  return (
    <>
      <Navigation />
      <SectionWrapper background={darkGrey}>
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
        <Button
          fontSize="1rem"
          text="Start din rejse her"
          color={white}
          top="0.4rem"
          center="0.5rem"
          bottom="0.6rem"
        />
      </SectionWrapper>
      <SectionWrapper background={white}>
        <SectionTitle>
          Vi kan hjælpa dig med digital transformation på to fronter
        </SectionTitle>
        <WrapperImages>
          <TransformationCard
            title="To røde og en grøn"
            paragraph="Selv om hun har sat alt mere frem, og derfor ikke længere kan betragtes
        som den glade giver, er det en nem sammenstilling, som bærer ved i lang
        tid."
            icon={<ImageOne color={black} />}
          />
          <TransformationCard
            title="To røde og en grøn"
            paragraph="Selv om hun har sat alt mere frem, og derfor ikke længere kan betragtes
        som den glade giver, er det en nem sammenstilling, som bærer ved i lang
        tid."
            icon={<ImageTwo color={black} />}
          />
        </WrapperImages>
      </SectionWrapper>
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

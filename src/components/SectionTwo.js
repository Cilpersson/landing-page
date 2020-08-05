import React from "react";
import { SectionWrapper, SectionTitle, WrapperImages } from "../lib/stylesheet";
import { ImageOne } from "../assets/ImageOne";
import { ImageTwo } from "../assets/ImageTwo";
import { TransformationCard } from "./TransformationCard";

export const SectionTwo = () => {
  const white = "rgb(255, 255, 255)";

  const black = "rgb(27, 27, 29)";

  return (
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
  );
};

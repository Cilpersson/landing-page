import React from "react";
import { Image } from "../lib/stylesheet";
import Clouds from "../assets/images/clouds.jpg";

export const ImageHero = () => {
  const altText = "White clouds and blue sky";
  return <Image src={Clouds} alt={altText} />;
};

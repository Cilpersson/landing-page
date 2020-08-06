import React from "react";
import { Video } from "../lib/stylesheet";
import Clouds from "../assets/video/clouds.mp4";

export const VideoPlayer = () => {
  return (
    <Video autoPlay muted loop>
      <source src={Clouds} type="video/mp4" />
    </Video>
  );
};

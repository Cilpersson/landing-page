import React from "react";
import { Dot, DotsWrapper } from "../lib/stylesheet";

export const DownButton = () => {
  const white = "rgb(255, 255, 255)";
  return (
    <DotsWrapper>
      <Dot height="0.4rem" color={white}></Dot>
      <Dot height="0.5rem" color={white}></Dot>
      <Dot height="0.6rem" color={white}></Dot>
    </DotsWrapper>
  );
};

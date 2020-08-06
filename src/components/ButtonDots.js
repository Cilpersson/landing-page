import React from "react";
import {
  Dot,
  WrapperCol,
  ParagraphBold,
  WrapperPointer,
} from "../lib/stylesheet";

export const ButtonDots = ({ top, center, bottom, text, color, fontSize }) => {
  return (
    <WrapperPointer>
      <ParagraphBold size={fontSize}>{text}</ParagraphBold>
      <Dot height={top} color={color}></Dot>
      <Dot height={center} color={color}></Dot>
      <Dot height={bottom} color={color}></Dot>
    </WrapperPointer>
  );
};

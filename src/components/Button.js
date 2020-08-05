import React from "react";
import { Dot, WrapperCol, ParagraphBold } from "../lib/stylesheet";

export const Button = ({ top, center, bottom, text, color, fontSize }) => {
  return (
    <WrapperCol>
      <ParagraphBold size={fontSize}>{text}</ParagraphBold>
      <Dot height={top} color={color}></Dot>
      <Dot height={center} color={color}></Dot>
      <Dot height={bottom} color={color}></Dot>
    </WrapperCol>
  );
};

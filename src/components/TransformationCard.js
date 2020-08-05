import React from "react";
import { Paragraph, ParagraphBold, WrapperCol } from "../lib/stylesheet";

export const TransformationCard = ({ icon, paragraph, title }) => {
  const black = "rgb(27, 27, 29)";

  return (
    <WrapperCol margin="0.5rem" width="calc(668px / 2)">
      {icon}
      <ParagraphBold color={black} margin="0" size="1.3rem">
        {title}
      </ParagraphBold>
      <Paragraph color={black}>{paragraph}</Paragraph>
    </WrapperCol>
  );
};

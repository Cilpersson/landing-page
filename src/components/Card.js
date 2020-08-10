import React from "react";
import { Paragraph, ParagraphBold, WrapperCard } from "../lib/stylesheet";

//I don't feel super happy with the name of this component, but I could think of anything better, it is however pretty vauge.

export const Card = ({ icon, paragraph, title }) => {
  const black = "rgb(27, 27, 29)";

  return (
    <WrapperCard>
      {icon}
      <ParagraphBold color={black} margin="0" size="1.3rem">
        {title}
      </ParagraphBold>
      <Paragraph color={black}>{paragraph}</Paragraph>
    </WrapperCard>
  );
};

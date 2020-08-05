import React from "react";
import { FormButton, ParagraphBold } from "../lib/stylesheet";

export const ButtonSubmit = ({ text, type }) => {
  const red = "rgb(239, 90, 81)";

  return (
    <FormButton type={type}>
      <ParagraphBold color={red} margin="0" size="1rem" weight="700">
        {text}
      </ParagraphBold>
    </FormButton>
  );
};

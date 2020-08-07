import React from "react";
import { StyledBurger } from "../lib/stylesheet";

export const Hamburger = ({ buttonClicked, setButtonClicked }) => {
  return (
    <StyledBurger
      buttonClicked={buttonClicked}
      onClick={() => setButtonClicked(!buttonClicked)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

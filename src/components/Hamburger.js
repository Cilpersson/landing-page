import React from "react";
import { ButtonWrapper, BurgerPatty } from "../lib/stylesheet";

export const Hamburger = ({ buttonClicked, setButtonClicked }) => {
  return (
    <ButtonWrapper onClick={() => setButtonClicked(!buttonClicked)}>
      <BurgerPatty />
      <BurgerPatty />
      <BurgerPatty />
    </ButtonWrapper>
  );
};

import React from "react";
import { BurgerWrapper, BurgerPatty } from "../lib/stylesheet";

export const Hamburger = () => {
  return (
    <BurgerWrapper>
      <BurgerPatty />
      <BurgerPatty />
      <BurgerPatty />
    </BurgerWrapper>
  );
};

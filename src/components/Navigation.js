import React from "react";
import { Hamburger } from "./Hamburger";
import { Logo } from "../assets/Logo";
import { Navbar, Filler } from "../lib/stylesheet";

export const Navigation = () => {
  return (
    <Navbar>
      <Logo color="rgb(255, 255, 255)" width="25" />
      <Hamburger />
      <Filler />
    </Navbar>
  );
};

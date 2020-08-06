import React, { useState, useEffect } from "react";
import { Hamburger } from "./Hamburger";
import { Logo } from "../assets/Logo";
import { Navbar, Filler } from "../lib/stylesheet";

export const Navigation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const white = "rgb(255, 255, 255)";

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const navWidth = (width) => {
    if (width > 668 && !buttonClicked) return "5rem";
    if (width > 668 && buttonClicked) return "15rem";
    if (width < 668 && buttonClicked) return "calc(100% / 3)";
    if (width < 668 && !buttonClicked) return "3rem";
  };

  return (
    <Navbar width={navWidth(windowWidth)}>
      <Logo color={white} width="50%" />
      <Hamburger
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <Filler />
    </Navbar>
  );
};

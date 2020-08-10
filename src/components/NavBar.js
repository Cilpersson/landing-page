import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import { Logo } from "../assets/Logo";
import { Navbar, Filler, Ul, Li } from "../lib/stylesheet";

export const NavBar = ({ windowWidth, closedWidth, openWidth }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const WINDOW_WIDTH_THRESHOLD = 668;
  const white = "rgb(255, 255, 255)";

  return (
    <Navbar width={buttonClicked ? openWidth : closedWidth}>
      <Logo
        color={white}
        width={windowWidth < WINDOW_WIDTH_THRESHOLD ? "30" : "50"}
      />
      <Ul>
        <Li
          opacity={buttonClicked ? "1" : "0"}
          delay={buttonClicked ? "0.2s" : "0s"}
        >
          About us
        </Li>
        <Li
          opacity={buttonClicked ? "1" : "0"}
          delay={buttonClicked ? "0.2s" : "0s"}
        >
          Career
        </Li>
        <Li
          opacity={buttonClicked ? "1" : "0"}
          delay={buttonClicked ? "0.2s" : "0s"}
        >
          Cool stuff
        </Li>
      </Ul>
      <Hamburger
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <Filler />
    </Navbar>
  );
};

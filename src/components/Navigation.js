import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";

export const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const WINDOW_WIDTH_THRESHOLD = 668;

  // Without useEffect the windowWidth value does not change on resize of window, only on refresh of page.
  // Perhaps not a completley neccesary feature but I'm quite fond of the useEffect hook and decided to keep it.
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    //Conditional rendering of the NavBar component depending on the width of the users window
    <>
      {windowWidth > WINDOW_WIDTH_THRESHOLD && (
        <NavBar
          windowWidth={windowWidth}
          closedWidth="5rem"
          openWidth="15rem"
        />
      )}
      {windowWidth <= WINDOW_WIDTH_THRESHOLD && (
        <NavBar
          windowWidth={windowWidth}
          closedWidth="3rem"
          openWidth="calc(100% / 3)"
        />
      )}
    </>
  );
};

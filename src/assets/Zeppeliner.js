import React, { useState, useEffect } from "react";

export const Zeppeliner = ({ color }) => {
  const MOBILE_WIDTH_THRESHOLD = 668;
  const DESKTOP_WIDTH_THRESHOLD = 1024;

  const MOBILE_SIZE = "50%";
  const TABLET_SIZE = "30%";
  const DESKTOP_SIZE = "15%";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Gets width of screen on resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const iconSize = (width) => {
    if (width < MOBILE_WIDTH_THRESHOLD) {
      return MOBILE_SIZE;
    }
    if (width > DESKTOP_WIDTH_THRESHOLD) {
      return DESKTOP_SIZE;
    } else {
      return TABLET_SIZE;
    }
  };

  return (
    <svg
      fill={color}
      width={iconSize(windowWidth)}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 500 500"
      version="1.1"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
    >
      <path d="M422.4 226.3L420.4 226.3 420.4 152.7 391.9 152.7 351.3 177.9 350.3 176.2 391.3 150.7 422.4 150.7z"></path>
      <path d="M422.6 332.5L391.5 332.5 391.2 332.4 350.4 307.1 351.5 305.4 392 330.5 420.6 330.5 420.6 256.7 422.6 256.7z"></path>
      <path d="M254.4 357.6L193.8 357.6 193.8 337.5 195.8 337.5 195.8 355.6 252.8 355.6 256.8 336 258.7 336.4z"></path>
      <path d="M219.1 339.8c-85.8 0-158.3-45-158.3-98.2s72.5-98.2 158.3-98.2c51.8 0 101.9 14.1 148.9 42 39.5 23.4 62.7 48.6 65.2 51.4l-1.5 1.3c-2.5-2.8-25.4-27.7-64.7-51-46.7-27.7-96.5-41.7-147.9-41.7-39.9 0-79.8 10.3-109.3 28.3-30.3 18.4-46.9 42.5-46.9 67.9s16.7 49.4 46.9 67.9c29.6 18 69.4 28.3 109.3 28.3 129.2 0 209.3-88.9 212.6-92.7l1.5 1.3c-3.4 3.8-84 93.4-214.1 93.4z"></path>
      <path d="M203.2 291.8c-64.9 0-112.7-16.7-142.2-49.6l1.5-1.3c29.1 32.5 76.4 48.9 140.7 48.9 85.2 0 169.5-27.3 205.5-38.9l1.7-.6.6 1.9-1.7.6c-36.1 11.7-120.6 39-206.1 39z"></path>
      <path d="M61.8 240.4H348.3V242.4H61.8z"></path>
      <path d="M62.6 242l-1.5-1.3c5.8-7 19.4-20.5 44.8-31.6 27-11.8 59.7-17.8 97.4-17.8 85.4 0 166.7 26.3 205.7 38.9l1.9.6-.6 1.9-1.9-.6c-38.9-12.6-120-38.8-205.1-38.8-93.1 0-131.3 37.3-140.7 48.7z"></path>
      <path d="M394 253.6c-22.7 0-46.7-4.2-46.7-12s24.1-12 46.7-12c24.5 0 46.7 8.7 46.7 12 .1 3.4-22.1 12-46.7 12zm0-22c-26.4 0-44.7 5.3-44.7 10s18.4 10 44.7 10c23.7 0 42-7.9 44.5-10-2.5-2.2-20.7-10-44.5-10z"></path>
    </svg>
  );
};

import styled from "styled-components/macro";

/* COLORS */
// red: 219 100 88
// white: 255 255 255
// black: 27 27 29
// light grey: 215 215 215
// dark grey: 42 42 44

/* TEXT STYLING */
export const Title = styled.h1``;
export const SubTitle = styled.h3``;
export const Paragraph = styled.p``;

/* CONTAINER */
export const SectionWrapper = styled.section`
  background: ${(props) => props.background};
  margin-left: 30px;
  height: 100vh;
`;

/* FILLER */

export const Filler = styled.div``;

/* NAVIGATION */

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: rgb(27, 27, 29);

  height: 100%;
  width: 30px;

  padding: 12px 0;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

/* HAMBURGER */

export const BurgerWrapper = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
`;
export const BurgerPatty = styled.div`
  height: 1px;
  width: 20px;
  background: rgb(215, 215, 215);
  margin: 2px;
`;

/* FORM */

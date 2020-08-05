import styled from "styled-components/macro";

/* COLORS */
// red: 219 100 88
// white: 255 255 255
// black: 27 27 29
// light grey: 215 215 215
// dark grey: 42 42 44

/* TEXT STYLING */
export const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-weight: 900;
  font-size: 2rem;

  @media (min-width: 668px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  max-width: 868px;

  @media (min-width: 668px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  font-weight: 300;
  font-size: 1.2rem;
`;

export const SmallSubTitle = styled.h6`
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  font-weight: 300;
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  margin: ${(props) => props.margin || "1rem 0"};
  max-width: 868px;
`;

export const ParagraphBold = styled(Paragraph)`
  font-weight: 900;
  font-size: ${(props) => props.size};
`;

/* CONTAINERS */
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.background};
  margin-left: 5rem;
  padding: 5% 25%;
  padding: 1rem 5rem;

  /* min-height: 100vh; */

  @media (max-width: 668px) {
    margin-left: 3rem;
    padding: 5% 15%;
  }
`;
export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin};
`;
export const WrapperCol = styled(WrapperRow)`
  flex-direction: column;
  max-width: ${(props) => props.width};
`;

// For images in second section
export const WrapperImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 868px;

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

/* FILLER */

export const Filler = styled.div`
  height: 15px;
  width: 15px;
`;

/* NAVIGATION */

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: rgb(27, 27, 29);

  height: 100%;
  width: 5rem;

  padding: 12px 0;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;

  @media (max-width: 668px) {
    width: 3rem;
  }
`;

/* HAMBURGER */

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;
export const BurgerPatty = styled.div`
  height: 1px;
  width: 2.5rem;
  background: rgb(215, 215, 215);
  margin: 0.2rem;

  @media (max-width: 668px) {
    width: 1.5rem;
  }
`;

/* DOTS */

export const Dot = styled.div`
  margin: 0.2rem;
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  border-radius: 50%;
  background: ${(props) => props.color};
`;

export const DotsWrapper = styled(ButtonWrapper)`
  /* position: absolute;
  bottom: 5%; */
`;

/* FORM */

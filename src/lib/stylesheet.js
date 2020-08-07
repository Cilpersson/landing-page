import styled from "styled-components/macro";

const white = "rgb(255, 255, 255)";
const red = "rgb(239, 90, 81)";
const black = "rgb(0, 0, 0)";

/* TEXT STYLING */
export const Title = styled.h1`
  color: ${white};
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
  color: ${(props) => props.color};
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

export const SmallSubTitle = styled.h3`
  color: ${(props) => props.color || white};
  font-weight: 300;
  font-size: 1.4rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.color || white};
  margin: ${(props) => props.margin || "1rem 0"};
  max-width: 868px;
`;

export const ParagraphBold = styled(Paragraph)`
  font-weight: ${(props) => props.weight || "900"};
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
  padding: 6rem 5rem;

  @media (max-width: 668px) {
    margin-left: 3rem;
    padding: 5% 10%;
  }
`;

export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin};
  width: 100%;
`;

export const WrapperCol = styled(WrapperRow)`
  flex-direction: column;
  max-width: ${(props) => props.width};
`;

export const WrapperForm = styled(WrapperRow)`
  justify-content: space-between;

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

export const WrapperPointer = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: none;
  background: none;
  cursor: pointer;
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

/* HERO VIDEO */
export const Video = styled.video`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 668px) {
    display: none;
  }
`;

/* HERO IMAGE */
export const Image = styled.img`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 668px) {
    display: none;
  }
`;

/* BUTTONS */
export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FormButton = styled.button`
  border: none;
  border-radius: 0.2rem;
  background: ${white};
  color: ${red};
  padding: 1rem 2.5rem;
  margin: 2rem 0 1.1rem;
  cursor: pointer;

  transition: 0.5s;
`;

/* FILLER */
export const Filler = styled.div`
  height: calc(100% / 4);
`;

/* HAMBURGER */
export const StyledBurger = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 668px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  /* Affects all div elements inside the button */
  div {
    width: 1.5rem;
    height: 1px;
    background: ${white};
    transform-origin: 1px;
    transition: all 0.2s linear;

    @media (min-width: 668px) {
      width: 2.5rem;
      height: 2px;
    }

    /* Passing in the boolean state from the hamburger component to toggle values */
    &:nth-child(1) {
      transform: ${({ buttonClicked }) =>
        buttonClicked ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ buttonClicked }) => (buttonClicked ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ buttonClicked }) =>
        buttonClicked ? "rotate(-45deg)" : "rotate(0)"};
    }
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

/* FORM */
export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 868px;
  margin: 2rem 0 1rem;
`;

export const Input = styled.input`
  text-align: left;
  width: ${(props) => props.width};
  background: none;
  color: ${white};
  border: none;
  border-bottom: 1px solid ${white};
  font-size: 1.1rem;
  padding: 0.75rem 0;

  &::-webkit-input-placeholder {
    opacity: 0.5;
    text-align: left;
    color: ${white};
    font-size: 1.1rem;
  }
`;
/* NAVIGATION */
export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${black};

  height: 100%;
  width: ${(props) => props.width};
  padding: 12px 0;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transition: 0.8s;
`;

/* LIST */
export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  margin: 0.4rem 0;
  text-align: left;
  color: ${white};
  transition: all 0.4s;
  white-space: nowrap;
  transition-delay: ${(props) => props.delay};
  opacity: ${(props) => props.opacity};

  @media (min-width: 668px) {
    font-size: 1.2rem;
  }
`;

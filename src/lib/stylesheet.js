import styled from "styled-components/macro";

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

export const SubTitle = styled.h3`
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  font-weight: 300;
  font-size: 1.2rem;
`;

export const SmallSubTitle = styled.h6`
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  font-weight: 300;
  font-size: 1.4rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
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
  padding: 3rem 5rem;

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
  background: rgb(255, 255, 255);
  color: rgb(239, 90, 81);
  padding: 1rem 2.5rem;
  margin: 2rem 0 1.1rem;

  transition: 0.5s;
`;

/* FILLER */

export const Filler = styled.div`
  height: ${(props) => props.height || "15px"};
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
  width: ${(props) => props.width};
  padding: 12px 0;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  /* overflow-x: hidden; */
  transition: 0.5s;
`;

/* HAMBURGER */

export const BurgerPatty = styled.div`
  height: 2px;
  width: 2.5rem;
  background: rgb(215, 215, 215);
  margin: 0.3rem 0;

  @media (max-width: 668px) {
    width: 1.5rem;
    margin: 0.2rem 0;
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
`;

export const Input = styled.input`
  text-align: left;
  width: ${(props) => props.width};
  background: none;
  color: rgb(255, 255, 255);
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.1rem;
  padding: 0.5rem 0;

  &::-webkit-input-placeholder {
    opacity: 0.5;
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 1.1rem;
  }
`;

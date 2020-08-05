import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
  text-align: center;
  font-family: Avenir,Helvetica,"sans-serif";
}

body::-webkit-scrollbar {
  width: 1rem;
  background: rgb(215,215,215);
}

body::-webkit-scrollbar-thumb {
    background: rgb(239, 90, 81);
}
`;

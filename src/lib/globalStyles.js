import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}

body::-webkit-scrollbar {
  width: 5px;
  background: rgb(215,215,215);
}

body::-webkit-scrollbar-thumb {
    background: rgb(219, 100, 88);
}
`;

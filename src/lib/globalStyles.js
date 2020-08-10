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

/* Removes scrollbar for numbers */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;

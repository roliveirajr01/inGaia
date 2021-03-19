import { createGlobalStyle } from "styled-components";
import background from "../img/background.svg";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000 ;
    --green: #CBD736;
    --white: #fff; 
  }
  * {
    font: 'Nunito', sans-serif !important;
  }
  body {
    padding: 0;
    background-image: url(${background});
    color: var(--black);
    font-weight: 300;
    margin: 0;
    font-family: 'Nunito', sans-serif !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    
  }

  a { 
    text-decoration: none;
  }

  li {
    display: inherit;
  }
`;

export default GlobalStyle;

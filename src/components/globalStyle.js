import { createGlobalStyle } from 'styled-components';
import background from '../img/background.svg'
 
const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000 ;
    --green: #CBD736;
    --white: #fff; 
  }
  body {
    padding: 0;
    background-image: url(${background});
    color: var(--black);
    font-weight: 300;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  ul {
    listy-style-type: none;
    padding: inherit;
    margin: initial;
  }
  
  a { 
    text-decoration: none;
  }

  li {
    display: inherit;
  }
  .color-black {
    color: #868686
  }
  .color-green {
    color: #007f56;
  }
  .color-rose {
    color: #FE9481;
  }
  .color-yellow {
    color: #FCDA92;
  }
  .color-purple {
    color: #9C8CB9;
  }
`;
 
export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`

  html {
      height: 100%;
  }

  *{
    margin: 0px;
    padding: 0px;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 60px;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${colors.white};
    background-color: ${colors.background};
    
  }

  h1{
    color: ${colors.primary};
  }

  button{
    cursor:pointer;
  }

`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Poppins;
    // transition: all 0.25s linear;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
   
  .App{
    width: 100%;
    min-height: 100vh;
    position:relative;
  }
  `
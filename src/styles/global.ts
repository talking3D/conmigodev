import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  };
  a {
    color: inherit;
    text-decoration: none;
  };
  * {
    box-sizing: border-box;
  };
`;

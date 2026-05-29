import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700");

  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova.woff2') format('woff2');
  }

  body {
    font-family: 'Proxima Nova', 'Inter', sans-serif;
  }
`;

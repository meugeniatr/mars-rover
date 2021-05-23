import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  html, body, .root {
    height: 100%;
  }

  html {   
    --baltic-sea: hsl(220,13%,18%);
    --aqua-island: hsl(176.2,74.3%,58.8%);

    --font-size-extra-small: 12px;
    --font-size-small: 14px;
    --font-size-normal: 16px;
    --font-size-medium: 20px;

    @media (max-width: 700px) {
      --font-size-extra-small: 14px;
      --font-size-small: 16px;
      --font-size-normal: 18px;
      --font-size-medium: 22px;
    }

    @media (min-width: 1920px) {
      --font-size-extra-small: 16px;
      --font-size-small: 18px;
      --font-size-normal: 21px;
      --font-size-medium: 24px;
    }
  }

  body {
    background-color: var(--baltic-sea);
    color: white;
    font-family: 'Orbitron', sans-serif;    
    margin: 0 40px;

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    }

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  footer {
    margin: auto 40px 0 40px;
  }

  a {
    color: var(--aqua-island);
  }

  p {
  margin-block-end: 10px;
  margin-block-start: 10px;
  }
`;

export default GlobalStyles;

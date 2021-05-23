import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  html {   
    --baltic-sea: #282c34;

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
    margin: 0;

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    }

    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html, body {
  height: 100%;
}


a {
  color: #61dafb;
}

p {
  margin-block-end: 10px;
  margin-block-start: 10px;
}
`;

export default GlobalStyles;

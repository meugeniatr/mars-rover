import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
0% {
  transform: translatey(0px);
}
50% {
  transform: translatey(-25px);
}
100% {
  transform: translatey(0px);
}`;

const Logo = styled.img`
  animation-name: ${breatheAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  height: 20vmin;
  pointer-events: none;
`;

export default Logo;

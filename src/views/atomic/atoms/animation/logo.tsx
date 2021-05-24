import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
0% {
  transform: translatey(0px);
}
25% {
  transform: rotate(-10deg);
}
50% {
  transform: translatey(-15px);
}

100% {
  transform: translatey(0px);
}`;

const Logo = styled.img`
  animation-name: ${breatheAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  height: 8vmin;
  pointer-events: none;
  margin: 0 10px;
`;

export default Logo;

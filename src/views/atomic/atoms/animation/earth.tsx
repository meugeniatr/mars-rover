import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
0% {
  transform: translatey(0px);
}
50% {
  transform: translatex(-15px);
}
100% {
  transform: translatey(0px);
}`;

const Earth = styled.img`
  animation-name: ${breatheAnimation};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  height: 8vmin;
  pointer-events: none;
  margin: 0 10px;
`;

export default Earth;

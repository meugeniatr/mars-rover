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
  position: absolute;
  top: 0;
  left: 0;
  flex-grow: 2;
  animation-name: ${breatheAnimation};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  height: 12vmin;
  pointer-events: none;
  margin-top: -15px;
  margin-left: -15px;
`;

export default Earth;

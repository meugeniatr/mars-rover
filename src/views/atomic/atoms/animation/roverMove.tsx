import styled, { keyframes } from "styled-components";

const roverMovementLeft = keyframes`
0% {
  transform: translatex(0px);
}
100% {
  transform: translatex(500px);
}`;

const roverMovementRight = keyframes`
0% {
  transform: translatex(0px);
}
100% {
  transform: translatex(500px);
}`;

export const moveLeft = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  animation-name: ${roverMovementLeft};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;

export const moveRight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${roverMovementRight};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;

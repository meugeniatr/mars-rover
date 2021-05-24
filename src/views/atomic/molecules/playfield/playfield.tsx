import styled from "styled-components";
import Flex from "../../atoms/flex/flex";
import playfieldProps from "./playfieldProps";
import rover from "../../../static/moon-rover.svg";

const Playfield: React.FC<playfieldProps> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <Flex container>
      <Plateau>
        <Rover src={rover} />
      </Plateau>
    </Flex>
  );
};

export default Playfield;

const Plateau = styled.div`
  display: flex;
  position: relative;
  width: 20vmax;
  margin: 20px;
  // background-image: url("/static/mars-background.jpg");
  background-color: red;
`;

const Rover = styled.img`
  position: absolute;
  height: 5vmin;
  z-index: 1;
`;

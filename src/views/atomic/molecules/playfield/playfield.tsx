import styled from "styled-components";
import playfieldProps from "./playfieldProps";
import rover from "../../../static/moon-rover.svg";
import earth from "../../../static/earth.svg";
import Earth from "../../atoms/animation/earth";

const Playfield: React.FC<playfieldProps> = ({ children }) => {
  return (
    <Relative>
      <Plateau />
      <Earth src={earth} />
      <Rover src={rover} />
      <Absolute>{children}</Absolute>
    </Relative>
  );
};

export default Playfield;

const Plateau = styled.div`
  display: flex;
  flex-grow: 2;
  width: 500px;
  height: 400px;
  opacity: 0.4;
  background-image: url(https://images.pexels.com/photos/7527857/pexels-photo-7527857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
`;

const Relative = styled.div`
  position: relative;
  display: flex;
`;

const Absolute = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;

const Rover = styled.img`
  position: absolute;
  height: 15vmin;
  right: 0;
  bottom: 0;
  margin-bottom: -16px;
  margin-right: -16px;
  transition: all 1.5s linear;

  &:hover {
    transform: translateX(-420px);
  }
`;

import GlobalStyles from "./views/global/globalStyles";
import logo from "./views/static/ufo-logo.svg";
import Flex from "./views/atomic/atoms/flex/flex";
import Logo from "./views/atomic/atoms/animation/logo";
import TextArea from "./views/atomic/atoms/textarea/textarea";
import earth from "./views/static/earth.svg";
import styled from "styled-components";
import Playfield from "./views/atomic/molecules/playfield/playfield";
import Typography from "./views/atomic/atoms/typography/typography";
import { useState } from "react";
import Earth from "./views/atomic/atoms/animation/earth";

const App = () => {
  //States
  const [result, setResult] = useState("");
  const directions = ["N", "E", "S", "W"];
  //Functions
  const onClick = (inputTextarea: string) => {
    // setResult(inputTextarea);

    const parsed = parseInput(inputTextarea);
    if (!parsed) {
      return;
    }
    const { map, rovers } = parsed;

    const res = rovers.map((rover) => {
      console.log(rover);
      return executeCommand(rover, map);
    });
    console.log(res);
  };

  const parseInput = (input: string) => {
    const commands = input.split("\n");
    let ret = {};
    var reMap = /^\d \d$/;
    var reRover = /^\d \d [NESW]$/;
    var reCommand = /^[LRM]*$/;

    if (commands.length < 3) {
      setResult("input must be at least 3 lines");
      return null;
    }

    if (commands.length % 2 == 0) {
      setResult("Line missing in input");
      return null;
    }

    var map = { x: 0, y: 0 };
    var curerntRover = 0;
    var rovers: any[] = [];

    commands.forEach((element: string, index: number) => {
      if (index === 0) {
        // Map size
        if (reMap.exec(element) == null) {
          setResult("Invalid map size");
          return null;
        }
        const mapInputs = element.split(" ");
        map.x = parseInt(mapInputs[0]);
        map.y = parseInt(mapInputs[1]);
      } else if (index % 2 == 0) {
        // Commands of the rover
        console.log(element);
        if (reCommand.exec(element) == null) {
          setResult(`Invalid rover position: ${element}`);
          return null;
        }

        rovers[0].commands = element.split("");
        curerntRover++;
      } else {
        // Rover
        if (reRover.exec(element) == null) {
          setResult(`Invalid rover position: ${element}`);
          return null;
        }
        let rover = { x: 0, y: 0, direction: "" };
        const roverInput = element.split(" ");
        rover.x = parseInt(roverInput[0]);
        rover.y = parseInt(roverInput[1]);
        rover.direction = roverInput[2];
        rovers.push(rover);
      }
    });

    return { map: map, rovers: rovers };
  };

  const turnRight = (direction: "N" | "E" | "W" | "S"): string => {
    const currentIndex = directions.indexOf(direction);
    return currentIndex + 1 > directions.length - 1
      ? directions[0]
      : directions[currentIndex + 1];
  };

  const turnLeft = (direction: "N" | "E" | "W" | "S"): string => {
    const currentIndex = directions.indexOf(direction);
    return currentIndex - 1 < 0
      ? directions[directions.length - 1]
      : directions[currentIndex - 1];
  };

  const move = (
    rover: { direction: string; x: number; y: number },
    map: { x: number; y: number }
  ) => {
    if (rover.direction === "N" && rover.y < map.y) {
      rover.y += 1;
    }
    if (rover.direction === "S" && rover.y > 0) {
      rover.y -= 1;
    }
    if (rover.direction === "W" && rover.x > 0) {
      rover.x -= 1;
    }
    if (rover.direction === "E" && rover.x < map.x) {
      rover.x += 1;
    }
    return rover;
  };

  const executeCommand = (rover: any, map: any) => {
    rover.commands.forEach((element: string) => {
      if (element === "L") rover.direction = turnLeft(rover.direction);
      if (element === "R") rover.direction = turnRight(rover.direction);
      if (element === "M") rover = move(rover, map);
    });
    return rover;
  };

  return (
    <>
      <GlobalStyles />
      <header>
        <Flex container flexDirection="row" margin="30px">
          <Logo src={logo} alt="Mars visitor" />
          <h1>Welcome to Mars!</h1>
        </Flex>
      </header>
      <Wrapper>
        <body>
          <p>
            A squad of robotic rovers are to be landed by NASA on a plateau on
            Mars. This plateau, which is curiously rectangular, must be
            navigated by the rovers so that their on-board cameras can get a
            complete view of the surrounding terrain to send back to Earth.{" "}
          </p>
          <p>
            A rover's position and location is represented by a combination of x
            and y co-ordinates and a letter representing one of the four
            cardinal compass points. The plateau is divided up into a grid to
            simplify navigation. An example position might be 0, 0, N, which
            means the rover is in the bottom left corner and facing North. In
            order to control a rover, NASA sends a simple string of letters.
          </p>
          <p>
            The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the
            rover spin 90 degrees left or right respectively, without moving
            from its current spot. 'M' means move forward one grid point, and
            maintain the same heading.
          </p>
          <Flex
            container
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Earth src={earth} />
            <Typography>{result}</Typography>
            <Playfield />
            <TextArea onClick={onClick} />
          </Flex>
        </body>
        <footer>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          Photo by{" "}
          <a
            href="https://www.pexels.com/@kindelmedia?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
            title="Kindel Media"
          >
            Kindel Media
          </a>{" "}
          from{" "}
          <a
            href="https://www.pexels.com/photo/flight-dawn-sky-sand-7527849/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
            title="Pexels"
          >
            Pexels
          </a>
        </footer>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

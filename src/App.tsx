import GlobalStyles from "./views/global/globalStyles";
import logo from "./views/static/logo.svg";
import Flex from "./views/atomic/atoms/flex/flex";
import Logo from "./views/atomic/atoms/logo/logo";
import TextArea from "./views/atomic/atoms/textarea/textarea";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Flex container flexDirection="row">
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
          <Flex container flexDirection="row">
            <TextArea input="holu" />
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

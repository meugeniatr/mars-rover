import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "../buttons/basic/button";
import Flex from "../flex/flex";
import Typography from "../typography/typography";
import textareaProps from "./textareaProps";

const TextArea: React.FC<textareaProps> = ({ onClick }): ReactElement => {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <Flex
      container
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <TextAreaInput value={input} onChange={handleChange} />
      <Flex container flexDirection="column" justifyContent="center">
        <Typography
          fontSize="var(--font-normal)"
          fontWeight={700}
          textAlign="center"
          margin="8px"
        >
          Set your instructions, please
        </Typography>
        <Flex container justifyContent="center">
          <Button
            radius="4px"
            onClick={() => onClick(input)}
            width="fit-content"
            color="var(--baltic-sea)"
          >
            <Typography
              fontSize="var(--font-size-medium)"
              color="white"
              fontWeight={700}
            >
              Move
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TextArea;

const TextAreaInput = styled.textarea`
  width: 500px;
  height: 400px;
  resize: vertical;
  display: flex;
  flex-grow: 2;

  border-radius: 4px;
  padding: 10px;
  font-size: 60px;

  &::focus {
    outline: 3px solid orange;
  }
`;

const Pushable = styled(Button)`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }
`;
const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;
const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;
const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

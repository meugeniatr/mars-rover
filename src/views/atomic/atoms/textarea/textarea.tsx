import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "../buttons/basic/button";
import Flex from "../flex/flex";
import Typography from "../typography/typography";
import textareaProps from "./textareaProps";

const TextArea: React.FC<textareaProps> = ({ input }): ReactElement => {
  const [comment, setComment] = useState(input);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <Flex
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <BlueTxt>Set your instructions, please</BlueTxt>
      <TextAreaInput value={comment} onChange={handleChange} />
      <Button color="var(--aqua-island)" radius="4px" onClick={() => {}}>
        <Typography fontSize="var(--font-size-medium)" color="white">
          Move
        </Typography>
      </Button>
    </Flex>
  );
};

export default TextArea;

const TextAreaInput = styled.textarea`
  min-height: 100px;
  max-height: 200px;
  resize: vertical;

  border: 4px solid var(--aqua-island);
  border-radius: 4px;
  padding: 10px;
  font-size: var(--font-size-small);

  &::focus {
    outline: 3px solid orange;
  }
`;

const BlueTxt = styled.h4`
  color: var(--aqua-island);
  font-size: var(--font-normal);
  font-weight: 700;
  text-align: center;
  margin: 8px;
`;

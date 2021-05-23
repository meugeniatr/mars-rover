import styled from "styled-components";
import typographyProps from "./typographyProps";

/**
 * TODO: create a responsive typography system with swappable tags;
 */

const Typography = styled.span<typographyProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  padding-bottom: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  word-break: break-all;
`;

export default Typography;

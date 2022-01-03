import styled from "styled-components";
import { buttons } from "../../constants";

// template strings : need backticks
const Button = styled.button`
  border: ${({ variation }) =>
    `${buttons[variation].borderWidth} ${buttons[variation].border}`};
  background-color: ${({ variation }) => buttons[variation].background};
  outline: none;

  &:hover {
    background-color: ${({ variation }) => buttons[variation].hoverBg};
  }

  &:focus {
    box-shadow: ${({ variation }) => buttons[variation].focusShadow};
  }
`;

export const Cta = ({ variation = "primary", text = "notext" }) => {
  return <Button variation={variation}>{text}</Button>;
};

//export const Cta = (props) => {
// props.variation
// props.text

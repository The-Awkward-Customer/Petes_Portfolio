import styled from "styled-components";
import { buttons } from "../../theme";

//template string examples: Note the backticks ``
//   border: ${({ variation }) =>
//     `${buttons[variation].borderWidth} ${buttons[variation].border}`};
//   background-color: ${({ variation }) => buttons[variation].background};

// template strings : need backticks
const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(38, 38, 38, 0.1);
  border-radius: 100px;
  padding-left: 4px;
  padding-top: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  border: 0px none;
  outline: none;

  &:hover {
    background-color: rgba(38, 38, 38, 0.15);
  }

  &:focus {
    box-shadow: ${({ variation }) => buttons[variation].focusShadow};
  }
`;

const Border = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap:4px;
  border: 2px solid black;
  border-radius: 100px;
  padding-left: 8px;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  }
`;

export const Cta = ({ variation = "primary", text = "", ...props }) => {
  return (
    <Button variation={variation}>
      <Border>
        {props.left}
        {text}
        {props.right}
      </Border>
    </Button>
  );
};

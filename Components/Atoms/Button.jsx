import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { SIZES } from "../../constants";
import { SPACING } from "../../constants";

const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? "blue" : null)};
  color: ${(props) => (props.primary ? "white" : "blue")};
  &:hover {
    background: white;
    color: pink;
    border: 2px solid pink;
  }
  &:focus {
    outline: none !important;
    background: white;
    background-color: pink;
    color: pink;
    border: 2px solid black;
  }

  // Default CSS
  font-size: 12px;
  margin: 24px;
  padding: 8px;
  border: 2px solid blue;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = () => {
  return (
    <div>
      <ButtonStyle primary>Hello</ButtonStyle>
      <ButtonStyle>Hello</ButtonStyle>
    </div>
  );
};

export default Button;

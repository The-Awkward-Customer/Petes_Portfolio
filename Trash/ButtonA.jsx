import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

//this is how you apply props and states
const ButtonA = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: ${(props) => (props.fullWidth ? "100%" : undefined)};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.color.primary50};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.color.text
      : props.theme.color.secondary_Inverse};

  border: ${(props) => props.theme.border.none};
  border-radius: ${(props) => props.theme.radii.base};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSize.xxs};
  cursor: pointer;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.color.secondary50};
  }

  &:focus {
    outline: 0px;
    box-shadow: ${(props) => props.theme.shadow.boxShadow};
  }
`;

ButtonA.Proptypes = {
  variant: Proptypes.oneOf(["secondary", "primary"]),
  disabled: Proptypes.bool,
  children: Proptypes.node.isRequired,
};

ButtonA.defaultProps = {
  variant: "secondary",
};

// const ButtonA = () => {
//   return (
//     <div>
//       <Button fullWidth>Button</Button>
//       <Button primary>Button</Button>
//     </div>
//   );
// };

export default ButtonA;

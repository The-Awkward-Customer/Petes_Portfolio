import React, { useState } from "react";
import styled from "styled-components";
import { SIZES, SPACING } from "../constants";
import useToggle from "../hooks/useToggle";

const Header = styled.h1`
  font-size: ${SIZES.m};
  margin: ${SPACING.m};
`;

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(true);
  return (
    <div>
      <Header onClick={toggleIsHappy}>{isHappy ? "😊" : "😢"}</Header>
      <Header onClick={toggleIsHeartBroken}>
        {isHeartBroken ? "❤️" : "💔"}
      </Header>
    </div>
  );
}

export default Toggler;

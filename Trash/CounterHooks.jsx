import styled from "styled-components";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { SIZES } from "../constants";

const Header = styled.h1`
  color: ${COLORS.primary_20};
  font-family: CivilPremium-Medium, sans-serif;
  font-size: ${SIZES.m};
`;

function CounterHooks() {
  const [count, setCount] = useState(0);

  // 1. the piece of state
  // 2. function to update that piece of state

  return (
    <div>
      <Header>The Count Is: {count}</Header>
      <button onClick={() => setCount(count + 1)}>add 1</button>
    </div>
  );
}

export default CounterHooks;

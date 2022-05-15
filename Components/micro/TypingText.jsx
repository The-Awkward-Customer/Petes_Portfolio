import styled from "styled-components";
import { useState, useEffect } from "react";
import { colors, typog } from "../../theme";

const Display = styled.h1`
  display: flex;
  padding: 64px 0px 0px 0px;
  font-family: ${typog.fonts.Headers};
  font-weight: 400;
  line-height: 160%;
  color: ${colors.color.hue_100};
  text-align: left;

  @media (min-width: 320px) {
    font-size: 6vw;
  }

  @media (min-width: 768px) {
    font-size: 4vw;
  }
`;

//string array
const words = [
  "Hello!",
  "We are now in a transition from an object-oriented to a systems-oriented culture. Here change emanates, not from things, but from the way things are done.",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  //blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  //typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <Display>
      {words[index].substring(0, subIndex)}
      {blink ? "|" : ""}
    </Display>
  );
}

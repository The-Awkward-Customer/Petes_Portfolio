import styled from "styled-components";
import { device, space } from "../../theme";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(auto, 13vw);
  grid-gap: ${space.fixed.s};
  padding: ${space.fixed.l};

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(auto, 90vw);
    grid-template-areas:
      "A"
      "B"
      "C"
      "D"
      "E"
      "F";
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(auto, 25vw);
    grid-template-areas:
      "A A A . . ."
      "A A A B B B"
      ". . . B B B "
      "C C C C C . "
      "C C C C C . "
      ". . . . . . "
      "D D D . . . "
      "D D D E E E "
      ". . . E E E "
      ". F F F F F"
      ". F F F F F"
      ". F F F F F";
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(auto, 13vw);
    grid-template-areas:
      "A A B B B B"
      "A A B B B B"
      ". . B B B B"
      ". . . C C C "
      ". . . C C C "
      ". . . . . ."
      "D D D D . . "
      "D D D D E E "
      "D D D D E E "
      ". . . . . . "
      ". F F F F F"
      ". F F F F F"
      ". F F F F F";
  }
`;

export const WorkGrid = (props) => {
  return <Content>{props.children}</Content>;
};

import styled from "styled-components";
import { device, placement, space } from "../theme";
import { VideoTile } from "./Tiles/VideoTile";
import TypingText from "../Components/molecules/TypingText";
import Accordian from "./Accordian";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  grid-area: ${placement.items.item1};
  min-height: 75vh;
  padding-top: ${space.fixed.xl};
`;

const SectionOne = styled.div`
  @media ${device.mobileS} {
    padding: ${space.fixed.m} ${space.fixed.m} ${space.fixed.m} ${space.fixed.m};
  }

  @media ${device.laptop} {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    row-gap: 24px;
    //height: 100%;
    padding: 0 ${space.fixed.l} ${space.fixed.xl} ${space.fixed.l};
  }
`;

export const Header = () => {
  return (
    <Container>
      <SectionOne>
        <TypingText />
        <Accordian />
      </SectionOne>
    </Container>
  );
};

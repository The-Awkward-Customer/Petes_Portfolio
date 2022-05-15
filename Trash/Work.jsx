import styled from "styled-components";
import { device, space } from "../../theme";
import { Header1 } from "../atoms/typography/Headers";
import VarTile from "../molecules/Tiles/VarTileBasic";
import { SectionHeader } from "../molecules/SectionHeader";
import { WorkGrid } from "./WorkGrid";
import { VideoTile } from "../molecules/Tiles/VideoTile";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  grid-area: B;

  @media ${device.mobileS} {
    padding-top: ${space.fixed.s};
    padding-bottom: ${space.fixed.s};
  }

  @media ${device.tablet} {
    padding-top: ${space.fixed.m};
    padding-bottom: ${space.fixed.m};
  }

  @media ${device.laptop} {
    padding-top: ${space.fixed.l};
    padding-bottom: ${space.fixed.l};
  }
`;

const SectionOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`;

export const Work = () => {
  return (
    <Container>
      <SectionHeader
        section="Work"
        header="A potted resumé of semi-recent outcomes proudly curated for your viewing pleasure."
        description="2016 – 22"
      />
      <SectionOne>
        <WorkGrid>
          <VarTile
            image="a"
            position="item1"
            title="Suzuki"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
          <VarTile
            image="b"
            position="item2"
            title="Shell"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
          <VideoTile
            position="item3"
            title="IKEA"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
          <VarTile
            image="d"
            position="item4"
            title="TSB"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
          <VarTile
            image="d"
            position="item6"
            title="TSB"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
          <VarTile
            image="f"
            position="item5"
            title="TSB"
            subtitle="this is a subtitle this is a subtitle this is a subtitle"
          />
        </WorkGrid>
      </SectionOne>
    </Container>
  );
};

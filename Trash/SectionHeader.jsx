import styled from "styled-components";
import { color, device, space } from "../../theme";
import { Header1 } from "../atoms/typography/Headers";

const Wrapper = styled.div`
  display: block;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: ${space.fixed.l};

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

const Divider = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 1px;
  background: ${color.primary.primary_100};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: auto;
  margin: 0 auto;
  padding-top: 8px;
  grid-gap: ${space.fixed.l} ${space.fixed.none};
  grid-template-areas: "A A A B B B C C C";
  padding-left: ${space.fixed.l};
  padding-right: ${space.fixed.l};
`;

export const SectionHeader = ({
  section = "",
  header = "",
  description = "",
}) => {
  return (
    <Wrapper>
      <Divider />
      <Grid>
        <Header1
          variation="l"
          position="item1"
          alignment="left"
          text={section}
        />
        <Header1
          variation="xs"
          position="item2"
          alignment="left"
          text={header}
        />

        <Header1
          variation="xs"
          position="item3"
          alignment="right"
          text={description}
        />
      </Grid>
    </Wrapper>
  );
};

import styled from "styled-components";
import { COLORS } from "../constants";
import { SPACING } from "../constants";
import { SIZES } from "../constants";
import { device } from "../constants";
// Component description: Custom text block (WiP)

// Wraps the whole component block
const Blockwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  padding-top: ${SPACING.m};
  padding-bottom: ${SPACING.m};
  //background: blue;
`;

// Wraps each text element
const Textwrapper = styled.div`
  max-width: 50vw;
  flex-grow: 1;
  //background: grey;

  @media ${device.mobiles} {
    max-width: 100vw;
  }

  @media ${device.tablet} {
    max-width: 50vw;
  }
  @media ${device.laptop} {
    max-width: 50vw;
  }
`;

// Standfirst style
const Standfirst = styled.h1`
  font-family: CivilPremium-Regular, sans-serif;
  font-size: ${SIZES.xs};
`;

// Header style
const Title = styled.h1`
  font-family: CivilPremium-Regular, sans-serif;

  @media ${device.mobileM} {
    font-size: ${SIZES.s};
  }

  @media ${device.laptop} {
    font-size: ${SIZES.l};
  }
`;

// Paragraph style
const Paragraph = styled.p`
  padding-top: ${SPACING.s};
  font-family: garamond-premier-pro, serif;
  font-size: ${SIZES.xs};
  color: ${COLORS.primary_50};
  //background: pink;
`;

const TextBlock = () => {
  return (
    <Blockwrapper>
      <Textwrapper>
        <Standfirst>Header</Standfirst>
      </Textwrapper>
      <Textwrapper>
        <Title>Zolph </Title>
        <Paragraph>
          We ask our clients to participate directly with us in an intensely
          collaborative process based on specific KPIs, rapid prototyping, and
          continuous testing and improvement.
        </Paragraph>
        <Paragraph>
          We ask our clients to participate directly with us in an intensely
          collaborative process based on specific KPIs, rapid prototyping, and
          continuous testing and improvement.
        </Paragraph>
        <Paragraph>
          We ask our clients to participate directly with us in an intensely
          collaborative process based on specific KPIs, rapid prototyping, and
          continuous testing and improvement.
        </Paragraph>
      </Textwrapper>
    </Blockwrapper>
  );
};

export default TextBlock;

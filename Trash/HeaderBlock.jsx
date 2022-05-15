import styled from "styled-components";
import { COLORS } from "../constants";
import { SPACING } from "../constants";
import { SIZES } from "../constants";
import { device } from "../constants";
import FlagIcon from "../Components/atoms/Flags";
// Component description: Custom text block (WiP)

// Block Wrapper
const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding-top: ${SPACING.xxl};
  padding-bottom: ${SPACING.xxl};
  grid-column-start: span 2;
`;

// Level 1 wrapper
const LevelOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: ${SPACING.xs};
  padding-bottom: ${SPACING.xs};
`;

// level 2 wrapper
const LevelTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${SPACING.xs};
  padding-bottom: ${SPACING.xs};
`;

// Flag call -- (Needs API Call)
// Scaffolded Styles (currently just a div with bg-image)
const FlagImage = styled.div`
  border-radius: 4px;
  //background-image: url(${flag});
  background-color: light grey;
  width: 29px;
  height: 19px;
  margin-right: ${SPACING.xs};
`;

// Translated language -- (Needs API Call)
//Scaffolded styling
const IntroCopy = styled.h1`
  font-family: CivilPremium-Regular, sans-serif;
  font-size: ${SIZES.xs};
  font-style: normal;
  font-weight: normal;
  padding: ${SPACING.xxs};
  color: ${COLORS.primary_50};
`;

// Paragraph styling
const Parapgraph = styled.p`
  font-family: CivilPremium-Regular, sans-serif;
  font-size: ${SIZES.xs};
  font-style: normal;
  font-weight: normal;
  color: ${COLORS.primary_50};

  @media-query ${device.mobileS} {
    width: 100vw;
  }

  @media ${device.laptop} {
    width: 40vw;
  }
`;

//Component
const HeaderBlock = () => {
  return (
    <BlockWrapper>
      <LevelOne>
        <FlagIcon />
        <IntroCopy> Hello…</IntroCopy>
      </LevelOne>
      <LevelTwo>
        <Parapgraph>
          I am a Product Designer with 8 years specalising in nuanced and
          complex digital experiences. I have a particular interest in the
          design of complex systems and love working with cross discplinary
          teams to build ambitious products that change the way we live.
        </Parapgraph>
      </LevelTwo>
      <LevelTwo>
        <Parapgraph>++</Parapgraph>
      </LevelTwo>
    </BlockWrapper>
  );
};

export default HeaderBlock;

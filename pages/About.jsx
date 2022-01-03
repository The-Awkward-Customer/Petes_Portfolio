import styled from "styled-components";
import TextBlock from "../Components/TextBlock";
import { COLORS } from "../constants";
import { SPACING } from "../constants";
import { SIZES } from "../constants";
import { device } from "../constants";

const PageWrapper = styled.div`
  margin: auto;
  padding: ${SPACING.l};
`;

const Header = styled.h1`
  color: ${COLORS.primary_20};
  font-family: CivilPremium-Medium, sans-serif;
  background: blue;

  @media ${device.mobileL} {
    font-size: ${SIZES.m};
  }

  @media ${device.tablet} {
    font-size: ${SIZES.l};
  }
`;

const Paragraph = styled.p`
  font-family: garamond-premier-pro, serif;
  font-variant: small-caps;
  color: ${COLORS.primary_20};
  font-weight: regular;
  font-size: ${SIZES.s};
`;

const About = () => {
  return (
    <PageWrapper>
      {/* <Header>About</Header>
      <Paragraph>hello there… this is the about page</Paragraph>
      <Paragraph>lorem ipsum</Paragraph> */}
      <TextBlock />
      <TextBlock />
    </PageWrapper>
  );
};

export default About;

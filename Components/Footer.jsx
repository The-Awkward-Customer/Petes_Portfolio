import styled from "styled-components";
import { SPACING } from "../constants";
import { COLORS } from "../constants";

// Component description: The global footer for the site

const FooterWrapper = styled.footer`
  flex: auto;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: block;
  text-align: center;
  background-color: ${COLORS.primary_20};
`;
const Paragraph = styled.p`
  padding: 32px;
  color: white;
  font-weight: 900;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Paragraph>MADE BY PETER ABBOTT</Paragraph>
    </FooterWrapper>
  );
};

export default Footer;

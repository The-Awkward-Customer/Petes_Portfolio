import Navbar from "./Navbar";
import Footer from "./Footer";
import { SPACING } from "../constants";
import { device } from "../constants";
import styled from "styled-components";

const SiteWrapper = styled.div`
  margin: auto;
  padding: ${SPACING.l};

  @media-query ${device.mobileS} {
    width: 100vw;
  }

  @media-query ${device.mobileM} {
    width: 100vw;
  }

  @media-query ${device.mobileL} {
    width: 100vw;
  }

  @media ${device.tablet} {
    width: 90vw;
  }

  @media ${device.laptopM} {
    width: 90vw;
  }

  @media ${device.laptopL} {
    width: 90vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <SiteWrapper className="">
      <Navbar />
      {children}
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components/macro";

const PageWrapper = styled.div`
  margin: auto;
  padding: ${SPACING.l};

  @media ${device.mobileS} {
    width: 100vw;
  }

  @media ${device.mobileM} {
    width: 100vw;
  }

  @media ${device.mobileL} {
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

export const Page = (props) => {
  return (
    <PageWrapper>
      <Navbar />
      {children}
      <Footer />
    </PageWrapper>
  );
};

Page.defaultProps = {
  selected: false,
};

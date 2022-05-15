import styled from "styled-components";
import { Footer } from "../micro/Footer";
import { Nav } from "../micro/Nav";

const PageWrapper = styled.div`
  background-color: lightpink;

  @media (min-width: 320px) {
    margin: 16px;
  }

  @media (min-width: 768px) {
    margin: 64px;
  }
`;

export const Page = (props) => {
  return (
    <PageWrapper>
      <Nav />
      {props.children}
    </PageWrapper>
  );
};

Page.defaultProps = {
  selected: false,
};

import styled from "styled-components";
import { space } from "../../theme";
import { Icon } from "../atoms/Icons";
import Label from "../atoms/Label";
import { Header1, Header2, Header3 } from "../atoms/typography/Headers";
import { Cta } from "../molecules/Cta";

// Component description: The global footer for the site

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${space.fixed.l};
  row-gap: ${space.fixed.l};
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Section2 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Section1>
        <Header2 text="A special thanks to name one, name two, name three, name four, name five and name six for helping me become the designer I am today." />
      </Section1>
      <Wrapper>
        <Section2>
          <Label />
          <Header1 variation="xs" text="Hours of design and counting 🚀" />
        </Section2>
        <Cta text={<Header1 variation="xxs" text="Back to top" />} />
      </Wrapper>
    </FooterWrapper>
  );
};

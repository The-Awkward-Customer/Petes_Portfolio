import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  background-color: red;
`;

const Label = styled.h1``;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Label>Footer1!</Label>
    </FooterWrapper>
  );
};

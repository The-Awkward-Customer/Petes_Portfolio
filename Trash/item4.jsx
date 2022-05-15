import styled from "styled-components";
import { space } from "../theme";
import { Header1 } from "../Components/atoms/typography/Headers";

const Container = styled.div`
  display: flex;
  grid-area: item4;
  width: 50vw;
  opacity: 40%;
  padding: ${space.fixed.l};
`;

const Section = styled.div``;

export const Item4 = (...props) => {
  return (
    <Container>
      <Header1
        variation="m"
        text="A special thanks to name one, name two, name three, name four, name five and name six for helping me become the designer I am today."
      />
    </Container>
  );
};

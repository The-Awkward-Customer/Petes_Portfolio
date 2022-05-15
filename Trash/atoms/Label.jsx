import styled from "styled-components";
import { color } from "../../theme";
import { Header3 } from "./typography/Headers";

const Container = styled.label`
  display: block;
  padding: 4px 8px 4px 8px;
  background: ${color.primary.primary_100};
  border-radius: 4px;
`;

const Label = () => {
  return (
    <Container>
      <Header3 variation="xxs" text="1560" />
    </Container>
  );
};

export default Label;

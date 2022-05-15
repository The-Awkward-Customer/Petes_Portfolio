import styled from "styled-components";
import { color } from "../theme";
import { Icon } from "../Components/atoms/Icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: ${color.primary.primary_20};
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const Container = styled.div`
  display: block;
  padding: 4px;
`;

const LinkBlock = (props) => {
  return (
    <Wrapper>
      <Container>
        <Icon />
      </Container>
    </Wrapper>
  );
};

export default LinkBlock;

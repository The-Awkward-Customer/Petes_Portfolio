import styled from "styled-components";
import { colors, typog } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: left;
  padding: 16px 0px 16px 0;
`;

const Text = styled.p`
  font-family: ${typog.fonts.Headers};
  font-size: 16px;
`;

const Link = styled.a`
  font-family: ${typog.fonts.Headers};
  font-size: 16px;
  font-weight: 800;
  color: ${colors.color.hue_100};
  text-decoration: none;

  &:hover {
    color: grey;
  }

  &:focus {
    outline: none;
    text-decoration: underline 2px;
  }
`;

export const Standfirst = () => {
  return (
    <Container>
      <Text>
        Currently maturing design at{" "}
        <Link href="https://www.fresha.com">Fresha</Link>
      </Text>
    </Container>
  );
};

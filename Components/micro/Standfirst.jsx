import styled from "styled-components";
import { colors, link, typog } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: left;
  padding: 16px 0px 16px 0;
`;

const Text = styled.p`
  font-family: ${typog.fonts.manrope};
  font-size: 16px;
`;

const Link = styled.a`
  font-family: ${link.default.font};
  font-size: ${link.default.size};
  font-weight: ${link.default.weight};
  color: ${link.default.color};
  text-decoration: ${link.default.decoration};

  &:hover {
    outline: none;
    color: ${link.hover.color};
    text-decoration: ${link.hover.decoration};
  }

  &:focus {
    outline: none;
    text-decoration: ${link.focused.decoration};
  }
`;

export const Standfirst = () => {
  return (
    <Container>
      <Text>
        Currently leading design at{" "}
        <Link href="https://www.fresha.com">Fresha</Link>
      </Text>
    </Container>
  );
};

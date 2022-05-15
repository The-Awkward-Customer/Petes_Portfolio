import styled from "styled-components";
import { colors, typog } from "../../theme";
import { Button } from "../Atoms/Button";

const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: white;
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background-color: white;
`;

const PlaceholderShape = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ffb802;
`;

const Label = styled.h1`
  font-family: ${typog.fonts.Headers};
  font-size: 16px;
  line-height: 160%;
  font-weight: 400;
  color: ${colors.color.hue_100};
`;

export const Nav = () => {
  return (
    <Section>
      <Container>
        <Placeholder>
          <PlaceholderShape />
        </Placeholder>
        <Label>P/A</Label>
      </Container>
      <Button />
    </Section>
  );
};

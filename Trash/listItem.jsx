import styled from "styled-components";
import { color } from "../../theme";
import { Header1 } from "../atoms/typography/Headers";
import { Para1 } from "../atoms/typography/Paragraphs";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px;
`;

const Prefix = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.primary.primary_20};
  /* min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  max-height: 80px; */
  border-radius: 8px;
`;

const IconPH = styled.div`
  display: block;
  background: ${color.primary.primary_80};
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 20px;
`;

export const ListItem = (props) => {
  return (
    <Container>
      <Prefix>
        <IconPH />
      </Prefix>
      <Content>
        <Header1 variation="xs" text="This is an article title" />
        <Para1
          variation="s"
          text="We ask our clients to participate directly with us in an intensely collaborative process based on specific KPIs, rapid prototyping, and continuous testing."
        />
      </Content>
    </Container>
  );
};

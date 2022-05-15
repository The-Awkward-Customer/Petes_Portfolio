import styled from "styled-components";
import { MosaicGrid } from "./MosaicGrid";
import { VariableItem } from "../atoms/imageItems/VariableItem";
import { Header1 } from "../atoms/typography/Headers";
import { space } from "../../theme";
import { SectionHeader } from "../molecules/SectionHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  grid-area: item3;
  padding-bottom: ${space.fixed.l};
`;

export const Experiements = () => {
  return (
    <Container>
      <SectionHeader
        left={
          <Header1
            variation="xs"
            position="item1"
            alignment="left"
            text="Section-2"
          />
        }
        header={
          <Header1
            variation="l"
            position="item2"
            alignment="left"
            text="Experiments"
          />
        }
        right={
          <Header1
            variation="xs"
            position="item3"
            alignment="right"
            text="Curated"
          />
        }
      />
      <MosaicGrid>
        <VariableItem variation="item1">
          <Header1 text="1" />
        </VariableItem>
        <VariableItem variation="item2">
          <Header1 text="2" />
        </VariableItem>
        <VariableItem variation="item3">
          <Header1 text="3" />
        </VariableItem>
        <VariableItem variation="item4">
          <Header1 text="4" />
        </VariableItem>
        <VariableItem variation="item5">
          <Header1 text="5" />
        </VariableItem>
        <VariableItem variation="item6">
          <Header1 text="6" />
        </VariableItem>
        <VariableItem variation="item7">
          <Header1 text="7" />
        </VariableItem>
        <VariableItem variation="item8">
          <Header1 text="8" />
        </VariableItem>
        <VariableItem variation="item9">
          <Header1 text="9" />
        </VariableItem>
        <VariableItem variation="item10">
          <Header1 text="10" />
        </VariableItem>
        <VariableItem variation="item11">
          <Header1 text="11" />
        </VariableItem>
        <VariableItem variation="item12">
          <Header1 text="12" />
        </VariableItem>
        <VariableItem variation="item13">
          <Header1 text="13" />
        </VariableItem>
        <VariableItem variation="item14">
          <Header1 text="14" />
        </VariableItem>
        <VariableItem variation="item15">
          <Header1 text="15" />
        </VariableItem>
        <VariableItem variation="item16">
          <Header1 text="16" />
        </VariableItem>
      </MosaicGrid>
    </Container>
  );
};

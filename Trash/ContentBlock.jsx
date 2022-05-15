import styled from "styled-components";
import { COLORS } from "../constants";
import { SPACING } from "../constants";
import { SIZES } from "../constants";
import { device } from "../constants";
import HeaderBlock from "./HeaderBlock";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const ItemA = styled.div`
  background: pink;
  height: 200px;
  margin: ${SPACING.xxs};
`;

const ItemB = styled.div`
  background: grey;
  height: 200px;
  margin: ${SPACING.xxs};
`;

const ItemC = styled.div`
  background: green;
  height: 200px;
  margin: ${SPACING.xxs};
`;

const ItemD = styled.div`
  background: purple;
  height: 200px;
  margin: ${SPACING.xxs};
`;
const ItemE = styled.div`
  background: purple;
  height: 200px;
  margin: ${SPACING.xxs};
`;
const ContentBlock = () => {
  return (
    <Grid>
      <HeaderBlock />
      <ItemA />
      <ItemB />
      <ItemC />
      <ItemD />
      <ItemE />
      <ItemE />
    </Grid>
  );
};

export default ContentBlock;

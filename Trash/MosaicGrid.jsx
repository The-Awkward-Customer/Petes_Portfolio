import styled from "styled-components";
import { space } from "../theme";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(auto, 13vw);
  grid-gap: ${space.fixed.s};
  grid-template-areas:
    "item1 item1 item2 item3 item4 item5"
    "item6 item7 item8 item8 item9 item5"
    "item6 item10 item8 item8 item9 item11"
    "item12 item13 item14 item15 item15 item16";
  padding: ${space.fixed.l};
`;

export const MosaicGrid = (props) => {
  return <Content>{props.children}</Content>;
};

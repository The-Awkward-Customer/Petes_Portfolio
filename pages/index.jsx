import styled from "styled-components";
import { SPACING } from "../constants";
import HeaderBlock from "../Components/HeaderBlock";
import ContentGrid from "../Components/ContentGrid";
import { device } from "../constants";
import CounterHooks from "../Components/CounterHooks";
import Toggler from "../Components/Toggler";

import { Cta } from "../Components/Atoms/Cta";

const PageWrapper = styled.div`
  margin: auto;
  /* padding: ${(props) => props.theme.space[0]}; */
`;

export default function Home() {
  return (
    <PageWrapper>
      <HeaderBlock />
      <Cta variation="primary" text="primary" />
      <Cta variation="secondary" text="secondary" />
      <ContentGrid />
      <CounterHooks />
      <Toggler />
    </PageWrapper>
  );
}

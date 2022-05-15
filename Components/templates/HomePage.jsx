import styled from "styled-components";

const Content = styled.div`
  display: block;
  background: white;
`;

export const HomePage = (props) => {
  return <Content>{props.children}</Content>;
};

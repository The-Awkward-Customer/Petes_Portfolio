import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 8px;
  padding: 8px;
`;

const LinkBlockSet = (props) => {
  return (
    <Wrapper>
      {props.first}
      {props.second}
      {props.third}
    </Wrapper>
  );
};

export default LinkBlockSet;

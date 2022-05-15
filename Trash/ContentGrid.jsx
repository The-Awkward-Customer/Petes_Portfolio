import styled from "styled-components";
import { SPACING } from "../constants";
import FlagIcon from "../Components/atoms/Flags";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto:
  padding: 10px;
  //background: white;
`;

const Content = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(auto, 13vw);
  gap: ${SPACING.xxs};
`;

//Grid items 1-16 (WiP)
const One = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  background: lightgrey;
`;

const Two = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  background: lightgrey;
  background-image: url("../images/flag.svg");
  background-repeat: no-repeat;
  background-size: 200%;
  background-position: 50% 50%;
  background-color: pink;
`;

const Three = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
  background-image: url("../images/flag.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Four = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Five = styled.div`
  grid-column: 6/7;
  grid-row: 1/3;
  background: lightgrey;
`;

const Six = styled.div`
  grid-column: 1/2;
  grid-row: 2/4;
  background: lightgrey;
`;

const Seven = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Eight = styled.div`
  grid-column: 3/5;
  grid-row: 2/4;
  background: lightgrey;
`;
const Nine = styled.div`
  grid-column: 5/6;
  grid-row: 2/4;
  background: lightgrey;
`;

const Ten = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Eleven = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Twelve = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Thirteen = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Fourteen = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Fifteen = styled.div`
  grid-column: ;
  grid-row: ;
  background: lightgrey;
`;

const Sixteen = styled.div`
  grid-column: 4/6;
  grid-row: 4/5;
  background: lightgrey;
`;

const ContentGrid = () => {
  return (
    <Wrapper>
      <Content>
        <One>
          <FlagIcon />
        </One>
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Ten />
        <Eleven />
        <Twelve />
        <Thirteen />
        <Fourteen />
        <Fifteen />
        <Sixteen />
      </Content>
    </Wrapper>
  );
};

export default ContentGrid;

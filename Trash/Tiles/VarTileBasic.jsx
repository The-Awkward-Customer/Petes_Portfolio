import styled from "styled-components";
import { placement, images } from "../../theme";
import { Header1, Header2 } from "../atoms/typography/Headers";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
  row-gap: 8px;
  border-radius: 8px;

  grid-area: ${({ position }) => placement.items[position]};
`;

const ImageBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  background: grey;
  border-radius: 8px;

  background-image: ${({ image }) =>
    `url("../images/${images.projects[image]}")`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Foreground = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 8px;

  &:hover {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const VarTile = ({
  title = "title",
  subtitle = "subtitle",
  position = "item1",
  image = "a",
  ...props
}) => {
  return (
    <Wrapper position={position}>
      <ImageBlock image={image}>
        <Foreground />
      </ImageBlock>
      <TextBlock>
        <Header1 variation="xxs" text={title} />
        <Header2 variation="xxs" text={subtitle} />
      </TextBlock>
    </Wrapper>
  );
};

export default VarTile;

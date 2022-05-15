import styled from "styled-components";
import { placement } from "../../../theme";
import { Header1, Header2 } from "../../atoms/typography/Headers";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
  row-gap: 8px;
  border-radius: 8px;

  grid-area: ${({ position }) => placement.items[position]};
`;

const Video = styled.video`
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: blue;
  border-radius: 8px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const VideoTile = ({
  title = "title",
  subtitle = "subtitle",
  position = "item1",
  ...props
}) => {
  return (
    <Wrapper position={position}>
      <Video controls>
        <source src="/videos/Skappa.mp4" />
      </Video>
      <TextBlock>
        <Header1 variation="xxs" text={title} />
        <Header2 variation="xxs" text={subtitle} />
      </TextBlock>
    </Wrapper>
  );
};

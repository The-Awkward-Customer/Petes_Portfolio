import styled from "styled-components";
import { color, placement } from "../theme";

const Background = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: stretch;
  background: ${color.primary.primary_20};
  grid-area: ${({ variation }) => placement.items[variation]};
  border-radius: 8px;

  background-image: url("../images/PlaceHolder.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  overflow:hidden;
  }
`;

const Foreground = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  &:hover {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`;

export const VariableItem = ({ variation = "item1", ...props }) => {
  return (
    <Background variation={variation}>
      <Foreground>{props.children}</Foreground>
    </Background>
  );
};

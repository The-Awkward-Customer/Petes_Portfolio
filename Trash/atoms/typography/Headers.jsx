import styled from "styled-components";
import { headers, placement, typography } from "../../../theme";

const H1 = styled.h1`
  font-family: ${({ variation }) => `${headers.h1[variation].font}`};
  font-size: ${({ variation }) => `${headers.h1[variation].fontSize}`};
  line-height: ${({ variation }) => `${headers.h1[variation].lineHeight}`};
  color: ${({ variation }) => `${headers.h1[variation].color}`};
  text-align: ${({ alignment }) => typography.alignment[alignment]};
  grid-area: ${({ position }) => placement.items[position]};
`;

export const Header1 = ({
  variation = "s",
  position = "item1",
  alignment = "left",
  text = "This is a H1",
}) => {
  return (
    <H1 variation={variation} position={position} alignment={alignment}>
      {text}
    </H1>
  );
};

const H2 = styled.h2`
  font-family: ${({ variation }) => `${headers.h2[variation].font}`};
  font-size: ${({ variation }) => `${headers.h2[variation].fontSize}`};
  line-height: ${({ variation }) => `${headers.h2[variation].lineHeight}`};
  color: ${({ variation }) => `${headers.h2[variation].color}`};
  text-align: ${({ alignment }) => typography.alignment[alignment]};
  grid-area: ${({ position }) => placement.items[position]};
`;

export const Header2 = ({
  variation = "s",
  position = "item1",
  alignment = "left",
  text = "This is a H2",
}) => {
  return (
    <H2 variation={variation} position={position} alignment={alignment}>
      {text}
    </H2>
  );
};

const H3 = styled.h3`
  font-family: ${({ variation }) => `${headers.h3[variation].font}`};
  font-size: ${({ variation }) => `${headers.h3[variation].fontSize}`};
  line-height: ${({ variation }) => `${headers.h3[variation].lineHeight}`};
  color: ${({ variation }) => `${headers.h3[variation].color}`};
  text-align: ${({ alignment }) => typography.alignment[alignment]};
  grid-area: ${({ position }) => placement.items[position]};
`;

export const Header3 = ({
  variation = "s",
  position = "item1",
  alignment = "left",
  text = "This is a H2",
}) => {
  return (
    <H3 variation={variation} position={position} alignment={alignment}>
      {text}
    </H3>
  );
};

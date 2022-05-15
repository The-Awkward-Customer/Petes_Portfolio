import styled from "styled-components";
import { paragraphs } from "../../../theme";

const P1 = styled.p`
  font-family: ${({ variation }) => `${paragraphs[variation].font}`};
  font-size: ${({ variation }) => `${paragraphs[variation].fontSize}`};
  line-height: ${({ variation }) => `${paragraphs[variation].lineHeight}`};
  color: ${({ variation }) => `${paragraphs[variation].color}`}; ;
`;

export const Para1 = ({ variation = "s", text = "This is a paragraph" }) => {
  return <P1 variation={variation}>{text}</P1>;
};

import styled from "styled-components";
import { useState, useRef } from "react";
import { Icon } from "./atoms/Icons";
import { Header2 } from "./atoms/typography/Headers";
import { Para1 } from "./atoms/typography/Paragraphs";
import { device } from "../theme";

const AccordianWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ToggleButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  column-gap: 8px;
  align-items: center;
  padding: 20px 20px 20px 0px;
  border: none;
  background-color: white;
  transition: background-color 0.6s ease;

  }
`;

//Allows Rotation access
const IconContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 32px;
  flex-grow: 1;
  overflow: hidden;
  transition: max-height 0.1s ease;

  @media ${device.mobileS} {
    flex-flow: row wrap;
    row-gap: 32px;
  }

  @media ${device.tablet} {
    flex-flow: row nowrap;
    row-gap: 48px;
  }

  @media ${device.laptop} {
    flex-flow: row nowrap;
    row-gap: 56px;
  }
`;

const First = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  transition: opacity 0.3s ease;
`;

const Second = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  width: 100%;
  transition: opacity 0.3s ease;
`;

const Third = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  width: 100%;
  transition: opacity 0.3s ease;
`;

export default function Accordian({ text = "Button", ...props }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setTitle, setTitleState] = useState("Read more");
  const [setRotate, setRotateState] = useState("accordian_icon");
  const [setOpacity, setOpacityState] = useState("0");
  const content = useRef(null);

  const ToggleAccordian = () => {
    setActiveState(setActive === "" ? "active" : "");
    setTitleState(setActive === "active" ? "Read more" : "TLDR");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(setActive === "active" ? "rotate(0deg)" : "rotate(45deg)");
    setOpacityState(setActive === "active" ? "0" : "1");

    console.log(setActive);
    console.log(content);
    console.log(setRotate);
    console.log(ToggleButton);
    console.log(setOpacity);
  };

  return (
    <AccordianWrapper>
      <ToggleButton onClick={ToggleAccordian}>
        <IconContainter style={{ transform: `${setRotate}` }}>
          <Icon />
        </IconContainter>
        <Header2 variation="xxs" text={setTitle} />
      </ToggleButton>
      <ContentContainer ref={content} style={{ maxHeight: `${setHeight}` }}>
        <First style={{ opacity: `${setOpacity}` }}>
          <Header2 variation="xs" text="Current role:" />
          <Para1
            variation="s"
            text="Leading all things Design System at Fresha."
          />
        </First>
        <Second style={{ opacity: `${setOpacity}` }}>
          <Para1
            variation="m"
            text="Sometimes we need a running application server to implement some special logic, for example consuming some user input from a form, invoking a service with that data, and then rendering a result of some sort."
          />
        </Second>
        <Third style={{ opacity: `${setOpacity}` }}>
          <Para1
            variation="m"
            text="Sometimes we need a running application server to implement some special logic, for example consuming some user input from a form, invoking a service with that data, and then rendering a result of some sort."
          />
        </Third>
      </ContentContainer>
    </AccordianWrapper>
  );
}

{
  /* <button onClick={() => setTest(!test)}>click me</button>
      {test ? <p>hello</p> : <p>goodbye</p>}
      <button onClick={() => setTest(!test)}>click me</button>
      {test && <p>hello</p>} */
}

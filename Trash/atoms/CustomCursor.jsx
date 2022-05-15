import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid grey;
  border-radius: 25px;
  position: absolute;
  pointer-events: none;}
  scale:1;
  z-index:1;

  @keyframes cursorAnim {
0% {
transform: scale(1);
}
50% {
transform: scale(5);
}
100% {
transform: scale(1);
opacity: 0;
}
}

&.expand  {
    animation: cursorAnim .5s forwards;
  }

  &.mouseDown {
    transform:scale(2); 
  }
`;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });

    // document.querySelectorAll("h1").forEach((h1) => {
    //   let rect = null;
    //   console.log("h1 found");

    //   h1.addEventListener(
    //     "mouseenter",
    //     ({ target }) => {
    //       isCusorLocked = true;
    //       console.log(isCusorLocked);
    //       rect = target.getBoundingClientRect();
    //     },
    //     { passive: true }
    //   );
    // });
  }, []);
  return <Cursor ref={cursorRef}></Cursor>;
}

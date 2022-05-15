import { useState, useEffect } from "react";

const useMousePostion = () => {
  const [postion, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const updatePostion = (event) => {
    const { pageX, pageY, clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePostion, false);
    document.addEventListener("mouseenter", updatePostion, false);

    return () => {
      document.removeEventListener("mousemove", updatePostion);
      document.removeEventListener("mouseenter", updatePostion);
    };
  }, []);
  return postion;
};

export default useMousePostion;

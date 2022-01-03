// return piece of state AND Function to toggle it

import { useState } from "react";

function useToggle(initialVal = false) {
  //call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND Function to toggle it
  return [state, toggle];
}

export default useToggle;

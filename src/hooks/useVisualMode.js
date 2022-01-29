import { useState } from "react";

const useVisualMode = (initial) => {
  //Stores history of rendered components in state
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //Renders a sepcific component based on user interactions from an array 
  //of historical views if replace = true, it replaces the last view in 
  //the history array instead of being added to the end of array
  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    }

    setMode(newMode);
  };

  //Renders the previous view when called
  const back = () => {
    if (history.length > 1) {
      setHistory(history.slice(0,-1)) 
      setMode(history[history.length - 2]);
    }
  };

  return {
    mode,
    transition,
    back,
  };
};

export default useVisualMode;

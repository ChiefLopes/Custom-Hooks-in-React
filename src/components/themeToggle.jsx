import React from "react";
import ResetButton from "./resetButton";
import { capitalize } from "../lib/utils";
import useCount from "../hooks/useCount";
import useColor from "../hooks/useColor";

const ThemeToggle = () => {
  const { count, increment, decrease, inre2 } = useCount();
  const { col, blue, green, red } = useColor();
  return (
    <div>
      <button>Light</button>
      <button>Dark</button>
      <p>{capitalize("beans")}</p>

      <p>{count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={inre2}>+2</button>

      <div>
        <p>The current color is: {col}</p>
        <button onClick={blue}>Blue</button>
        <button onClick={green}>Green</button>
        <button onClick={red}>Red</button>
      </div>

      <ResetButton />
    </div>
  );
};

export default ThemeToggle;

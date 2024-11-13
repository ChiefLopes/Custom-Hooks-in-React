import React from "react";
import ResetButton from "./resetButton";
import { capitalize } from "../lib/utils";

const ThemeToggle = () => {
  return (
    <div>
      <button>Light</button>
          <button>Dark</button>
          <p>{capitalize('beans')}</p>

          <ResetButton />
    </div>
  );
};

export default ThemeToggle;

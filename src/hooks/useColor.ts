import { useState } from "react";

const useColor = () => {
  const [col, setCol] = useState("#0000FF");

  function blue() {
    setCol("#0000FF"); // Correctly updates the color to blue
  }

  function green() {
    setCol("#008000"); // Correctly updates the color to green
  }

  function red() {
    setCol("#FF0000"); // Correctly updates the color to red
  }

  return { col, blue, green, red }; // Return the color and functions to change it
};

export default useColor;

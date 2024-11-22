import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function inre2() {
    setCount(count + 2);
  }

  function decre2() {
    setCount(count - 2);
  }

  return { count, increment, decrease, inre2, decre2 };
};

export default useCount;

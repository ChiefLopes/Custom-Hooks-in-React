import React from "react";
import ThemeToggle from "./components/themeToggle";
import ItemList from "./components/itemList";

const App = () => {
  return (
    <div>
      <ItemList />
      <ThemeToggle />
    </div>
  );
};

export default App;

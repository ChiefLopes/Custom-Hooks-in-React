import React, { useState } from "react";
import { capitalize } from "../lib/utils";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const helo = "hello"
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{capitalize("Bread")}</li>
        ))}

        <p>{capitalize("tread")}</p>
        <p>{capitalize(helo)}</p>
      </ul>
    </div>
  );
};

export default ItemList;

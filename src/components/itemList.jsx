import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item.charAt(0).toUppercase() + item.slice(1)}</li>;
        })}
      </ul>
    </div>
  );
};

export default ItemList;

import React, { useEffect, useState } from "react";
import Card from "./Card";

function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/products`)
      .then((resolve) => resolve.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container">
      <h1 className="title">Item Collection</h1>
      <div className="cards">
        {items.map((item) => {
          return <Card key={item.product_id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Item;

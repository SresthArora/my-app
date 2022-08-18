import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img
          src={`https://source.unsplash.com/1600x800/?${props.item.name}`}
          className="card-img"
          alt=""
        />
        <small>{`only ${props.item.stock} left`}</small>
      </div>
      <div className="padding">
        <div>
          <h1 className="card-title">{props.item.name}</h1>
          <h4 className="price">{`₹ ${props.item.selling_price}`}</h4>
        </div>
        <p className="card-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          aspernatur.
        </p>
        <button className="order-btn">Order now</button>
      </div>
    </div>
  );
}

export default Card;

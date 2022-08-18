import React from "react";

function User(props) {
  return (
    <div className="card">
      <div>
        <img
          src={`https://source.unsplash.com/1600x800/?${props.img}`}
          className="card-img"
          alt=""
        />
      </div>
      <div className="padding">
        <div>
          <h1 className="card-title">{props.name}</h1>
        </div>
        <p className="card-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          aspernatur.
        </p>
        <p className="mail">{props.name}@xyz.com</p>
      </div>
    </div>
  );
}

export default User;

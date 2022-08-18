import React, { useState, useEffect } from "react";
import User from "./User";

function Customers() {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUser] = useState([1, 2, 3, 4]);
  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/users`)
      .then((resolve) => resolve.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    setDisplayUser(users);
  });
  function previousUsers() {
    setDisplayUser((prevUsers) => {
      return prevUsers.map((id) => id - 5);
    });
    console.log(displayUsers);
  }
  function nextUsers() {
    setDisplayUser((prevUsers) => {
      return prevUsers.map((id) => id + 5);
    });
    console.log(displayUsers);
  }
  return (
    <div className="container">
      <h1 className="title">Customer review</h1>
      <div className="users">
        {displayUsers.map((user) => {
          return <User name={user.name} img={"user"} key={user.user_id} />;
        })}
      </div>
      {/* <div className="btns">
        <button className="btn" onClick={previousUsers}>
          Prev
        </button>
        <button className="btn" onClick={nextUsers}>
          Next
        </button>
      </div> */}
    </div>
  );
}

export default Customers;

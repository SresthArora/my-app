import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Background from "../images/banner.avif";
import Search from "./Search";

function Main() {
  const [searchText, setSearchText] = useState("");

  return (
    <main
      className="parent banner"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar />
      <div className="banner-content">
        <h1 className="banner-heading">StoreHook</h1>
        <p className="banner-desc">Discover the best food & drinks in town</p>
        <Search handleSearch={setSearchText} />
      </div>
    </main>
  );
}

export default Main;

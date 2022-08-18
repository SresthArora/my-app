import React from "react";

function Search({ handleSearch }) {
  return (
    <div>
      <form action="" className="search">
        <input
          onChange={(event) => handleSearch(event.target.value)}
          type="text"
          placeholder="Search for item"
          className="search-field"
        />
        <input type="button" value="Search" className="banner-btn" />
      </form>
    </div>
  );
}

export default Search;

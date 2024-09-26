// src/components/SearchBar.js
import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search colors (e.g., 'red', '#123456')"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

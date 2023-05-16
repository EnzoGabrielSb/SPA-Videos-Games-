import "../Styles/SearchBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div>
      <h1>Search Bar</h1>
      <select onChange={handlerOrder}>
        <option value="order" disabled="disabled">
          Filter VideoGames By:
        </option>
        <option value="VG-API">VideoGames Web🌐</option>
        <option value="VG-DB">VideoGames DataBase💻 </option>
      </select>
      <select onChange={handlerFilter}>
        <option value="filter" disabled="disabled">
          Order VideoGames By:
        </option>
        <option value="A-B">A-B</option>
        <option value="Rating">Rating</option>
      </select>

      <div class="input-group">
        <input
          type="text"
          value={character}
          onChange={handleChange}
          id="input-field"
        />
        <button onClick={() => onSearch(character)} class="submit-button">
          <span>ADD VIDEO GAME🎮 </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

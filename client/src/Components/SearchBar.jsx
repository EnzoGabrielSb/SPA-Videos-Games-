import { useState, useRef } from "react";
import { findByName } from "../Redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Styles/SearchBar.css";

export default function Nav() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const miRef = useRef(null);

  function handleClick() {
    dispatch(findByName(state));
  }

  function findGame() {
    setState(miRef.current.value);
    if (miRef.current.value === "") {
      dispatch(findByName(""));
    }
  }

  return (
    <div>
      <div className="container-btns">
        <NavLink to="/createvideogame">
          <button className="btn">+ VG🚀</button>
        </NavLink>
        <NavLink to="/home">
          <button className="btn">Home⚔️</button>
        </NavLink>
        <NavLink to="/aboutMe">
          <button className="btn">About Me🕹️</button>
        </NavLink>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Search Video Game..."
          ref={miRef}
          onChange={() => findGame()}
          id="input-field"
        />
        <button onClick={handleClick} className="submit-button">
          Search Game
        </button>
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { findByName } from "../Redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

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
      <div>
        <input
          type="text"
          placeholder="Search Video Game..."
          ref={miRef}
          onChange={() => findGame()}
        />
        <button onClick={handleClick}>Search Game</button>
        <NavLink to="/app/home/create">Create Videogames</NavLink>
      </div>
    </div>
  );
}

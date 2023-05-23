import "../Styles/SearchBtns.css";
import { NavLink } from "react-router-dom";

const SearchBtns = () => {
  return (
    <>
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
    </>
  );
};

export default SearchBtns;

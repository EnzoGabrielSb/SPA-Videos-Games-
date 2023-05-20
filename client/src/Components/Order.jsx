import React, { useRef } from "react";
import { connect } from "react-redux";
import { orderAlphabetic, gamesByGenre, gamesByRating } from "../Redux/actions";
import "../Styles/Order.css";

function Order({ orderAlphabetic, gamesByGenre, gamesByRating }) {
  let miRef = useRef(null);
  let GenRef = useRef(null);
  let RatRef = useRef(null);

  function cambiarEstado() {
    orderAlphabetic(miRef.current.value);
  }

  function OrderGenres() {
    gamesByGenre(GenRef.current.value);
  }
  function OrderRating() {
    gamesByRating(RatRef.current.value);
  }

  return (
    <div className="full-container">
      <div className="select">
        <select defaultValue="Select" ref={miRef} onChange={cambiarEstado}>
          <option disabled selected>
            Alphabetic
          </option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </select>
      </div>
      <div className="select">
        <select defaultValue="Select" ref={GenRef} onChange={OrderGenres}>
          <option disabled selected>
            Generes
          </option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Strategy">Strategy</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Arcade">Arcade</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Fighting">Fighting</option>
          <option value="Sports">Sports</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>
      </div>
      <div className="select">
        <select defaultValue="Select" ref={RatRef} onChange={OrderRating}>
          <option disabled selected>
            Filter Rating
          </option>
          <option value="Asc">Lower Score</option>
          <option value="Desc">Higher Score</option>
        </select>
      </div>
    </div>
  );
}

export default connect(null, {
  orderAlphabetic,
  gamesByGenre,
  gamesByRating,
})(Order);

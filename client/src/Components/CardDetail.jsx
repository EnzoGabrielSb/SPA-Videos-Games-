import React from "react";
import { connect } from "react-redux";

function CardDetail({ videogame }) {
  return (
    <div>
      {videogame &&
        videogame?.map((e) => (
          <div key={e.id}>
            <div>
              <h1>{e.name}</h1>
              <img src={e.img} alt="Imagen dañada" />
              <p>Rating: {e.rating}</p>
              <p>Released: {e.released}</p>
              <p>
                Genres:
                {e.genres?.map((ele, i) => (
                  <span key={i}>{ele}</span>
                ))}
              </p>
              <p>
                Platforms:{" "}
                {e.platforms?.map((el, i) => (
                  <span key={i}>{el}</span>
                ))}
              </p>
              <p>Description: {e.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    videogame: store.id,
  };
};

export default connect(mapStateToProps)(CardDetail);

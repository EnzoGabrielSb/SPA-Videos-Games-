import React from "react";
import { connect } from "react-redux";
import "../Styles/CardDetail.css";

function CardDetail({ videogame }) {
  return (
    <div>
      <div className="main-container">
        {videogame &&
          videogame?.map((e) => (
            <div
              key={e.id}
              className="card-containter"
              style={{
                backgroundImage: `url(${e.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            >
              <p className="card-tittle">{e.name}</p>
              <p className="card-description">⭐Rating: {e.rating}</p>
              <p className="card-description">📅Released: {e.released}</p>
              <p className="card-description">
                🧬Genres:
                {e.genres?.map((ele, i) => (
                  <span key={i}>{ele}</span>
                ))}
              </p>
              <p className="card-description">
                🕹️Platforms:{" "}
                {e.platforms?.map((el, i) => (
                  <span key={i}>{el}</span>
                ))}
              </p>
              <div className="description-box">
                <p className="card-description">Description: {e.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    videogame: store.id,
  };
};

export default connect(mapStateToProps)(CardDetail);

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllGames, findById } from "../Redux/actions";
import { NavLink } from "react-router-dom";
import Paginado from "../Components/Paginado";
import "../Styles/Cards.css";

function Cards({ getAllGames, videogames, findById }) {
  useEffect(() => {
    getAllGames();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalVideogames = 15;

  const totalPages = Math.floor(videogames.length / totalVideogames); //100/15

  let games = videogames.slice(
    currentPage * totalVideogames - totalVideogames,
    currentPage * totalVideogames
  );
  //(pag 1 indice 0) 2*15-15 =15      // 2*15 = 30

  function pages(num) {
    setCurrentPage(num);
  }

  return (
    <div>
      <div>
        {
          // videogames.length ? videogames.map(el =>
          games.length ? (
            games.map((e) => (
              <div key={e.id} onClick={() => findById(e.id)}>
                <NavLink to={`/home/${e.id}`}>
                  <p>{e.name}</p>
                  <img src={e.image} alt="Imagen de videogames" />
                  <p>Release: {e.releasedate}</p>
                  <div>
                    <p>
                      Genrees:
                      {e.genres.map((ele, i) => (
                        <p key={i}>{ele}</p>
                      ))}
                    </p>
                    <p> Rating: {e.rating}</p>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <div>
              <img alt="Gif Cargando" />
            </div>
          )
        }
      </div>
      <Paginado totalPages={totalPages} pages={pages} />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    videogames: store.videoGames,
    name: store.name,
  };
};

export default connect(mapStateToProps, { getAllGames, findById })(Cards);

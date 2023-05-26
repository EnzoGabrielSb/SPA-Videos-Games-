import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllGames, findById } from "../Redux/actions";
import { NavLink } from "react-router-dom";
import Paginado from "../Components/Paginado";
import Footer from "../Components/Footer";
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
      <div className="container">
        {
          // videogames.length ? videogames.map(el =>
          games.length ? (
            games.map((e) => (
              <div
                className="card5"
                style={{
                  backgroundImage: `url(${e.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                }}
              >
                <div
                  key={e.id}
                  onClick={() => findById(e.id)}
                  className="card5-content"
                >
                  <NavLink to={`/home/${e.id}`}>
                    <div className="spanTitulo">
                      <span>{e.name}</span>
                    </div>
                    <img src={e.image} alt="Imagen de videogames" />
                    <div className="spanTitulo">
                      <h5>Release: {e.releasedate}</h5>
                    </div>
                    <div className="spanTitulo">
                      <h5>
                        Genres:
                        {e.genres?.map((ele, i) => (
                          <h6 key={i}>{ele}</h6>
                        ))}
                      </h5>
                    </div>
                    <div className="spanTitulo">
                      <h5> Rating: {e.rating}</h5>
                    </div>
                  </NavLink>
                </div>
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
      <Footer />
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

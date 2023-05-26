import "../Styles/FormPage.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { submitPost } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const FormPage = ({ submitPost }) => {
  const [state, setState] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    genre: [],
  });

  let historyHome = useNavigate();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (e) => {
    setState({
      ...state,
      rating: parseInt(e.target.value),
    });
  };

  const handleGenres = (e) => {
    setState({
      ...state,
      genre: state.genre.includes(e.target.value)
        ? state.genre.filter((gen) => gen !== e.target.value)
        : state.genre.concat(e.target.value),
    });
  };

  const handlePlatforms = (e) => {
    setState({
      ...state,
      platforms: state.platforms.includes(e.target.value)
        ? state.platforms.filter((plat) => plat !== e.target.value)
        : state.platforms.concat(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.name == "") {
      return alert("Missing add the videogame's name");
    }
    if (state.released == "") {
      return alert("Missing add game release date");
    }
    if (
      state.rating < 0 ||
      state.rating == 0 ||
      state.rating > 5 ||
      state.rating == "" ||
      state.rating == NaN
    ) {
      return alert("The rating must be 0-5");
    }
    if (state.image == "") {
      return alert("Missing add the image's URL");
    }
    if (state.description == "" || state.description.length < 15) {
      if (state.description == "")
        return alert("Missing add game's description");
      if (state.description.length < 15)
        return alert(
          "The game's description must be longer that 15 charaters."
        );
    }
    if (state.genre == "") {
      return alert("Missing add genre");
    }
    if (state.platforms == "") {
      return alert("Missing add platforms");
    }

    await submitPost(state);
    historyHome("/home");
    alert("The game was created!");
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a new VideoGame!</h3>
        <div>
          <label htmlFor="">Name of the game:</label>
          <input
            className="info"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="">Release:</label>
          <input
            className="info"
            type="date"
            name="released"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="">Rating:</label>
          <input
            className="info"
            type="text"
            name="rating"
            onChange={(e) => handleRating(e)}
          />
        </div>

        <div>
          <label htmlFor="">URL Image:</label>
          <input type="url" name="image" onChange={(e) => handleChange(e)} />
        </div>

        <label htmlFor="">Genre/s:</label>
        <div className="genres-box">
          <div>
            <input
              value="Action"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Action</label>
          </div>

          <div>
            <input
              value="Indie"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Indie</label>
          </div>

          <div>
            <input
              value="Strategy"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Strategy</label>
          </div>

          <div>
            <input
              value="Adventure"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Adventure</label>
          </div>

          <div>
            <input
              value="Shooter"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Shooter</label>
          </div>

          <div>
            <input
              value="Casual"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Casual</label>
          </div>

          <div>
            <input
              value="Simuluation"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Simulation</label>
          </div>

          <div>
            <input
              value="Arcade"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Arcade</label>
          </div>

          <div>
            <input
              value="Puzzle"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Puzzle</label>
          </div>

          <div>
            <input
              value="Platformer"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Platformer</label>
          </div>

          <div>
            <input
              value="Racing"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Racing</label>
          </div>

          <div>
            <input
              value="Massively Multiplayer"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Massively Multiplater</label>
          </div>

          <div>
            <input
              value="Fighting"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Fighting</label>
          </div>

          <div>
            <input
              value="Sports"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Sports</label>
          </div>

          <div>
            <input
              value="Family"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Family</label>
          </div>

          <div>
            <input
              value="Board Games"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Board Games</label>
          </div>

          <div>
            <input
              value="Educational"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Educational</label>
          </div>

          <div>
            <input
              value="Card"
              type="checkbox"
              name="genre"
              onChange={(e) => handleGenres(e)}
            />
            <label>Card</label>
          </div>
        </div>

        <div>
          <label>Platforms:</label>
        </div>
        <div className="genres-box">
          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>PS4</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 5"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>PS5</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PC"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>PC</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>SEGA</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>NINTENDO</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>NINTENDO SWITCH</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>ATARI</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>XBOX ONE</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>XBOX 360</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>GAME BOY ADVANCED</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>IOS</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>LINUX</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>ANDROID</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="PlayStation 4"
              name="platforms"
              onChange={(e) => handlePlatforms(e)}
            />
            <label>WEB</label>
          </div>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            cols="40"
            rows="6"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <button type="submit">Boton</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    resPost: store.resPost,
    genres: store.genres,
    platforms: store.platforms,
  };
};

export default connect(mapStateToProps, { submitPost })(FormPage);

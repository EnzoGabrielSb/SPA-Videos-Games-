import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Detail from "./components/Detail.jsx";
import Error from "./components/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    // Como trabajaremos conectado al BAKC-END ya no haremos peticiones a una API externa, sino a nuestra 'base de datos'
    //fetch(`https://rickandmortyapi.com/api/character/${character}`)
    //Ahora esta es nuestra coneccion FRON END - BACK END.
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();

  // Conexion con el Form.

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  let username = "enzogabrielvera07@gmail.com";
  let password = "Enzo07";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && location.pathname !== "/about" && (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/" element={<Form login={login} />} />

        <Route path="/about" element={<AboutMe />} />

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

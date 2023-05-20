import "./App.css";
import LandingPage from "./Components/LandingPage";
import SearchBar from "./Components/SearchBar";
import AboutMe from "./Components/AboutMe";
import FormPage from "./Components/FormPage";
import Cards from "./Components/Cards";
import CardDetail from "./Components/CardDetail";
import Order from "./Components/Order";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
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
      {location.pathname !== "/" && location.pathname !== "/aboutMe" && (
        <SearchBar />
      )}

      {location.pathname !== "/" &&
        location.pathname !== "/aboutMe" &&
        location.pathname !== "/createvideogame" && <Order />}

      <Routes>
        <Route path="/" element={<LandingPage login={login} />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/home/:id" element={<CardDetail />} />
        <Route path="/createvideogame" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;

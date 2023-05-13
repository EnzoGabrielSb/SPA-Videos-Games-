import "./App.css";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
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
      {location.pathname !== "/" && location.pathname !== "/aboutMe" && <Nav />}

      <Routes>
        <Route path="/" element={<LandingPage login={login} />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

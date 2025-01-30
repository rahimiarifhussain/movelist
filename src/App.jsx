import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

import {MovieProvider} from "./context/MovieContext"


const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;

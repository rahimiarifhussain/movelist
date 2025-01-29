import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Routes>
          <Route path="/favorite" element={ <Favorites />} />
          <Route path="/" element={ <Home />} />
      </Routes>
        
    </main> 
    </div>
    
  )
    
}

export default App;
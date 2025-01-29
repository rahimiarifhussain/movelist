import MovieCard from "./components/MovieCard";
import logo from "../src/assets/images/logo.png"
import Home from "./pages/Home";

const App = ()=> {
  return(
    <div className="container-xl py-4 lg:container m-auto justify-center text-center bg-indigo-50">
      <Home />
    </div>
  );
}

export default App;
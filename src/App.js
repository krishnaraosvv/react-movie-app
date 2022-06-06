import "./App.css";
import React, {useContext} from "react";
import MovieList from "./Components/movieList";
import Search from "./Components/search";
import { GlobalContext } from "./GlobalContext";
function App() {
  const { movieList } = useContext(GlobalContext);
  return (
    <div
      style={{ backgroundColor: movieList && movieList.length > 0 && "black" }}
    >
      <Search />
      <MovieList />
    </div>
  );
}

export default App;

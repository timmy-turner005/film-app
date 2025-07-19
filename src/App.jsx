import "./css/App.css";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Watched from "./pages/Watched";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main classname="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
    const apiKey = '98e3fb1f';

    const [movie, setMovie] = useState(null);

    const getMovie = async (searchTerm) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
        const data = await response.json();
        setMovie(data);
    }


    return (
        <div className="App">
            <Form moviesearch={getMovie} />
            <MovieDisplay movie={movie} />
        </div>
    )
}
import { useState, useEffect } from "react";

export default function MovieList(){
    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/movie/popular', {
            headers:{
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
        }).then((res) => res.json())
        .then((data) => setMovies(data.results));

        console.log(movies);
    }, []);

    return(
        <div>
            <h2>
                Popular movies (no virus)
            </h2>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
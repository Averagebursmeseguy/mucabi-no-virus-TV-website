import { useState, useEffect } from "react";
import { getMovies } from "../api/api";
import MovieCard from "./MoveCard";


export default function MovieSearch( {onSelectMovie} ){
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch(e){
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]);
    try{
      const results = await getMovies(query);
      setMovies(results);
      console.log(results);
    } catch(err){
      setError(`failed to fetch:${err}`);
    }finally{
      setLoading(false);
    }

  }
  return(
    <div>
        <form onSubmit={handleSearch}>
        <input
        type="text"
        placeholder="Search movies (no virus)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />

        <button>
          Search
        </button>

        </form>

        {loading && (
          <ul className="result-container">
            {Array.from({
              length: 4
            }).map((_, i) => (
              <div key={i}> 
               <div className="skeleton" />
               </div>
            ))}
          </ul>
        )}
        {error && <p style={{color:"red"}}>{error} (no virus)</p>}
        {!loading && movies.length === 0 && query && <p>No results(no virus)</p>}
         
         <ul className="result-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => onSelectMovie(movie)}/>
                ))}
            </ul>

      {/* <MovieList /> */}
    </div>
  );
}
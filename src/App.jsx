import { useEffect, useState } from "react"
import "./App.css"
import MovieSearch from "./components/MovieSearch"
import MovieDetails from "./components/MovieDetails";

export default function App(){
  const [selectedMovie, setSelectedMovie] = useState(null);

  return(
    <div className="App">
      <h1>100% No Virus</h1>
      <h2>Your 100% no virus movie site</h2>
      <MovieSearch onSelectMovie={setSelectedMovie}/>

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
      )}
    </div>
  )
}
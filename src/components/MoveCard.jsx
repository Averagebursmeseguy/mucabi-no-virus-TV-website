export default function MovieCard({movie, onClick}){
    return(
        <div key={movie.id} className="movie-card" onClick={onClick}>
                        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>}
                        <div>
                            <strong>{movie.title}</strong>
                            <p>{movie.release_date}</p>
                        </div>
        </div>
    )
}
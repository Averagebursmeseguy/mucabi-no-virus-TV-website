export default function MovieDetails({movie, onClose}){
    return(
        <div className="details-overlay">
            <div className="details-container">
                <button onClick={onClose}> X </button>
                    <div>
                        <h2>{movie.title}</h2>
                        <p className="desc-text">{movie.overview}</p>
                    </div>
                {movie.poster_path && (
                    <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                )}
            </div>
        </div>
    )
}
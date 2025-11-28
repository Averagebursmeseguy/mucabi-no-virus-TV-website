const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// export async function getMovies(query) {
//     const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&${encodeURIComponent}`);
//     const data = await res.json();
//     console.log(data.results);
//     return data.results;
// }

export async function getMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&${encodeURIComponent}`;
    const res = await fetch(url);
    
    if(!res.ok){
        throw new Error("failed to fetch API");
    }
    const data = await res.json();
    return data.results;
}
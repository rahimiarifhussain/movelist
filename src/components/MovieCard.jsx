import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css"
const MovieCard = ({movie})=> {
    const onFavoriteClick =()=> {
        alert("clicked");
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn"
                    onClick={onFavoriteClick}
                >
                    <FaHeart className="text-5xl text-red-500" />
                </button>
            </div>
        </div>
        
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard;
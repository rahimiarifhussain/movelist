import { useState } from 'react';
import MovieCard from './../components/MovieCard';
import "../css/Home.css";
const Home = () => {
    const [search, setSearch] = useState();
    const movies = [
        { id: 1, title: "Johan Wick", release_date: "2020" },
        { id: 2, title: "Terminatro", release_date: "2020" },
        { id: 3, title: "The Matrix", release_date: "2020" },
        { id: 4, title: "Johan Wick", release_date: "2020" },
        { id: 5, title: "Johan Wick", release_date: "2020" },
        { id: 6, title: "Johan Wick", release_date: "2020" },
    ]


    const handleSearch = (e) => {
        e.preventDefault();
        alert("the serach button", search)
        setSearch(".............")
    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type='text'
                    placeholder='search for the movies..'
                    className='search-input'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    type="submit"
                    className='search-button'
                >Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map(

                    // movie => movie.t
                    movie=>
                    <MovieCard movie={movie} key={movie.id} />
                    // )
                )}
                    
            </div>
        </div>
    )
}

export default Home;
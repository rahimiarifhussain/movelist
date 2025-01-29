import MovieCard from './../components/MovieCard';
const Home = ()=> {
    const movies = [
        {id:1, title:"Johan Wick", release_date:"2020"},
        {id:2, title:"Terminatro", release_date:"2020"},
        {id:3, title:"The Matrix", release_date:"2020"},
        {id:4, title:"Johan Wick", release_date:"2020"},
        {id:5, title:"Johan Wick", release_date:"2020"},
        {id:6, title:"Johan Wick", release_date:"2020"},
    ]


const handleSearch = ()=> {
     
}


    return (
        <div className="home">
            <form onSubmit={handleSearch}>
                <input type='text' placeholder='search for the movies..' className='search-input' />

                <button 
                type="button"
                className='search-button'
                >Search</button>
            </form>
            <div className="movies-grid">
               { movies.map( movie=> <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home;
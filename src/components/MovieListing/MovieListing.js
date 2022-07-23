import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

const MovieListing = () =>{
    const movies = useSelector(getAllmovies)
    const shows = useSelector(getAllShows)
    console.log(movies)

    let renderMovies, renderShows = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie,index)=>{
            return <MovieCard key={index} data={movie} />
        })
    ) : (<div> Cargando </div>)

    renderShows = shows.Response === "True" ? (
        shows.Search.map((movie,index)=>{
            return <MovieCard key={index} data={movie} />
        })
    ) : (<div> Cargando </div>)
    return(
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="movie-list">
                <h2>Shows</h2>
                <div className="show-container">
                    {renderShows}
                </div>
            </div>
            
        </div>
    )
}

export default MovieListing;
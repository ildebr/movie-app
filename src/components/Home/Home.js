import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch, useSelector } from 'react-redux';
import "./Home.scss"
import { fetchAsyncHeader, fetchAsyncMovies, fetchAsyncSeries, getHeader } from '../../features/movies/movieSlice';

const Home = () =>{
    const dispatch = useDispatch();
    const data = useSelector(getHeader)
    console.log(data)
    useEffect(()=>{

        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncHeader())
    },[dispatch])

    return(
        <div>
            <header class="home-header">
                <img className="home-header-img" src={data.Poster} alt={data.Title} />
                <div className="score-box">
                    <span className="rating"> 
                    {data.imdbRating}
                    </span>
                </div>
            </header>
            <MovieListing />
        </div>
    )
}

export default Home;
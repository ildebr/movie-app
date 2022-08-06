import React, { useEffect } from 'react';
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { fetchAsyncMoviesOrSeries,getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { getAllmovies} from '../../features/movies/movieSlice';
import "./MovieDetail.scss"
import MovieCarrousel from '../MovieCarrousel/MovieCarrousel';

const MovieDetail = () =>{
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    console.log(imdbID)
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)
    useEffect(()=>{
        dispatch(fetchAsyncMoviesOrSeries(imdbID))
        // return () =>{
        //     dispatch(removeSelectedMovieOrShow())
        // }
    },[dispatch])

    let renderMoviesCarrousel = ""

    const movies = useSelector(getAllmovies)
    console.log(movies)
    renderMoviesCarrousel = movies.Response === "True" ? (
        movies.Search.map((movie,index)=>{
            return <MovieCarrousel key={index} data={movie} />
        })
    ) : (<div> Cargando </div>)


    const moveRight = () =>{
        console.log("p")
        const p = document.querySelector(".movie-carrousel-elements")

        const sw = p.scrollWidth
        const ow = p.offsetWidth
        const mv = p.offsetWidth/2
        const sl = p.scrollLeft
        console.log("sl+mv "+ (sl+mv) + "   sw " + sw)
        if(sl+mv <= sw){
            p.scrollLeft += mv
        }
    }
    const moveLeft = () =>{
        const p = document.querySelector(".movie-carrousel-elements")

        const sw = p.scrollWidth
        const ow = p.offsetWidth
        const mv = p.offsetWidth/2
        const sl = p.scrollLeft
        console.log("sl+mv "+ (sl+mv) + "   sw " + sw)
        if(sl > 0){
            p.scrollLeft -= mv
        }
    }

    const t = document.querySelector(".movie-carrousel-elements")

    // t.addEventListener('touchstart', function(){
    //     console.log("alo")
    // })
    return(
        <div className="movie-section">
            {Object.keys(data).length === 0 ? 
            <div>Error loading</div> :    
            <>
            <div className="section-left">
                <div className="movie-title">
                    <h2>{data.Title}</h2>
                </div>

                <div className="about-movie">
                    <div className="about type">
                        {data.Type}
                    </div>

                    <div className="about">
                        {data.Country}
                    </div>

                    <div className="about">
                        {data.Language}
                    </div>

                    <div className="about">
                        {data.Country}
                    </div>

                    <div className="about">
                        {data.Director}
                    </div>

                    <div className="about">
                        {data.Runtime}
                    </div>

                </div>

                <div className="about-movie-big">
                    <div className="line">
                        <div className="section">
                            <div className="about">
                                {data.Country}
                            </div>  
                            <div className="shortseparator"></div>
                            <div className="about">
                                {data.Language}
                            </div>  
                        </div>

                        <div className="longseparatorcontainer">
                            <div className="longseparator"></div>
                        </div>

                        <div className="rightsection">
                        <div className="about">
                                {data.Released}
                            </div>  
                        </div>
                    </div>

                    <div className="line">

                        <div className="rightsection">
                            <div className="about">
                                    {data.Runtime}
                                </div>  
                        </div>
                        

                        <div className="longseparatorcontainer">
                            <div className="longseparator"></div>
                        </div>

                        <div className="section">
                            <div className="about">
                                {data.Director}
                            </div>  
                            <div className="shortseparator"></div>
                            <div className="about">
                                {data.Actors}
                            </div>  
                        </div>
                        
                    </div>
                </div>

                <div className="synopsis">
                    <h3>
                        Synopsis
                    </h3>
                    <p>{data.Plot}</p>
                </div>

               
            </div>

            <div className="section-right">
                <img src={data.Poster} alt={data.Title}/>
            </div>

            <div className="movieCarrousel">
                <div className="left-arrow" onClick={moveLeft}></div>
                <div className="movie-carrousel-elements">
                    {renderMoviesCarrousel}

                    
                </div>
                <div className="right-arrow" onClick={moveRight}></div>
            </div>
            </>
        }

        
        </div>
    ) 
}

export default MovieDetail;
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import useFetch from '../../useFetch';
import "./MovieCard.scss"
import {APIKey} from "../../common/apis/MovieApiKey"

const MovieCard = (props) =>{
    const {data} = props;
    const basUrl = "https://www.omdbapi.com";
    //console.log(data)

    const [extraData, setExtraData] = useState({})

    const {data: datos, isPending, error } = useFetch(`${basUrl}/?apikey=${APIKey}&i=${data.imdbID}`)

    useEffect(()=>{
        setExtraData(datos)
    }, [datos])
    return(
        <div className="card-item">
            <Link to={`/movie/${data.imdbID}`}>
            <div className="card-inner">
                
                <div className="card-top">
                    <div className="img-section">
                        <div className="score-box">
                            <span className="rating"> 
                            {extraData ? extraData.imdbRating : "..."}
                            </span>
                        </div>
                        <div className="hover-box">
                            <span>{data.Title}</span> 
                            <span> ({data.Year})</span>
                        </div>
                        <img src={data.Poster} alt={data.Title} />  
                    </div>
                    <h2>{data.Title}</h2>
                </div>
            </div>
            </Link>

        </div>
    )
}

export default MovieCard;
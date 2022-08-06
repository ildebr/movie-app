import { Link } from "react-router-dom";
import "./MovieCarrousel.scss"

const MovieCarrousel = (props) =>{
    const {data} = props;
    console.log(data)
    return (
        // <Link to={`/movie/${data.imdbID}`}>
        <div className="movieCarrouselCard">
            <img src={data.Poster} />
        </div>
        // </Link>
    )

}

export default MovieCarrousel;
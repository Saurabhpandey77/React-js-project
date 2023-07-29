import React from "react";
import { useNavigate } from "react-router-dom";
const Card=(movie)=>{
    console.log(movie.info);
    let navigate=useNavigate();
    return(
        <>
        <div className="movie" key={movie.info.imdbID} onClick={()=>{navigate(`/${movie.info.imdbID}`)}}>
            <img src={movie.info.Poster} className="poster"></img> 
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.info.Title}</h4>
                    <p className="rating">{movie.info.Year}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;
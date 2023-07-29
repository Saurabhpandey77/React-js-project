import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './movieInfo.css';
const MovieInfo=()=>{
const [item,setItem]=useState([]);
    const {MoveID}=useParams();
    
    useEffect(()=>{
        if(MoveID!=="")
    {
        fetch(`https://www.omdbapi.com/?i=${MoveID}&apikey=fc1926ba`).then(res=>res.json())
        .then(data=>{
        
            setItem(data);
        })
    }
    },[])
    return(
        <>
        <div className="header">
            <nav>
                <ul>
                    <li>MOVIEAPP</li>
                </ul>
            </nav>
        </div>
        <div className="container1">
            <div className="left_container">
                <img className="movieposter" src={item.Poster}></img>
            </div>
            <div className="right_container">
                <div className="movie-info">
                    <h3 className="move-title">{item.Title}</h3>
                    <ul className="movie-misc-info">
                        <li className="year">Year : {item.Year}</li>
                        <li className="rated">Rated : {item.Rated}</li>
                        <li className="released">Released : {item.Released}</li>
                    </ul>
                    <p className="genre">Genre : {item.Genre}</p>
                    <p className="writer">Writer : {item.Writer}</p>
                    <p className="actors">Actors : {item.Actors}</p>
                    <p className="Plot">Plot : {item.Plot}</p>
                    <p className="language">Language : {item.Language}</p>
                    <p className="awards">Awards : {item.Awards}</p>

                

                </div>
            </div>

        </div>
        </>
    )
}
export default MovieInfo;
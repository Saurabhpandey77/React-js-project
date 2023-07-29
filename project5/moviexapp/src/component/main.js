import React, { useEffect, useState } from "react";
import Card from "./card";
let API_key="&apikey=fc1926ba";
let base_url="https://www.omdbapi.com/?s=";
let url=base_url+"movie"+API_key;
const Main =()=>{
    const [movieData, setMovieData]=useState([]);
    const[url_set,setUrl]=useState(url);
    const[scrmovie,setScrMovie]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setMovieData(data.Search)
        });
    },[url_set])
    const changeText=(event)=>{
        setScrMovie(event.target.value)
    }
    const getMovie=(e)=>{
        e.preventDefault();
        setUrl(base_url+scrmovie+API_key)
    }

    return(
        <>
        <div className="header">
            <nav>
                <ul>
                    <li>MOVIXAPP</li>
                </ul>
            </nav>
            <form className="search-btn" onSubmit={getMovie}>
                <input type="text" placeholder="Enter movie name" className="inputText" value={scrmovie} onChange={changeText}></input>
                <button><i class="fas fa-search"></i></button>
            </form>  
        </div>
        <div className="container">
            {
                (movieData.length==0)?<p className="notfound">Not Found</p>:movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })
            }
        </div>
        
        </>
    )
}
export default Main;
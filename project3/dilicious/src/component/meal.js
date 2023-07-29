import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Mealitem from "./mealitem";
import RecipeIndex from "./recipeindex";
 const Meal=()=>{
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const[item, setItem]=useState()
    const[search, setSearch]=useState()
    const[show, setShow]=useState(false)
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals)
            setShow(true)
        })
    },[url])
    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`) 

    }
    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
        }
    }
    return(
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search your food recipe</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi asperiores explicabo quos veritatis alias.
                    </h4>
                </div>
                <div className="searchbar">
                    <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
                </div>
                <div className="indexcontainer">
                    <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>
                <div className="container">
                    {
                        show ? <Mealitem data={item}/> : "Not Found"
                    }
            
                </div>
        
            </div>
        
        </>
    )
 }

 export default Meal;
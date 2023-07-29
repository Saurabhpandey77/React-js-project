import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
import Pokeinfo from "./pokeinfo";
import axios from "axios";
    
const Main=()=>{
    const [Pokedata,setPokedata]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nexturl,setNextUrl]=useState();
    const [prevurl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        console.log(res)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        console.log(loading)
    };
    const getPokemon=async(res)=>{

        // console.log("saurabh")
        // console.log(res.data.results)
       res.map(async(item)=>{
        const result=await axios.get(item.url)
        console.log(result.data)
        setPokedata(state=>{
            state=[...state,result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })
        console.log(Pokedata)
       })
    } 
    useEffect(()=>{ 
        pokeFun();
    },[url])
  
    return(
        <>
        <div className="container">
            <div className="left-content">
                <Card pokemon={Pokedata} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                <div className="btn-group">
                { prevurl && <button onClick={()=>{
                    setPokedata([])
                    setUrl(prevurl);
                }}>Previous</button>}
                { nexturl && <button onClick={()=>{
                    setPokedata([])
                    setUrl(nexturl);
                }}>Next</button>}
            </div>
            </div>
            <div className="right-content">
                <Pokeinfo data={pokeDex}/>
            </div>
            
        </div>
        </>
    )
}
export default Main;
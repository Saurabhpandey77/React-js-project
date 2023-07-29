import React, { useState, useEffect}from "react";
import "./App.css"

function App(){
  const [userChoice,setUseChoice]=useState("stone");
  const[computerChoice, setComputerChoice]=useState("stone");
  const [userpoint, setuserpoint]=useState(0);
  const [computerpoint, setcomputerpoint]=useState(0);
  const [turnpoint, setturnpoint]=useState(null);
  const [result,setresult]=useState("Let's see who wins");
  const [gameover,setgameover]=useState(false);
  const choices=['stone','paper','scissors'];
  const handleronClick =(choice)=>{
    setUseChoice(choice)
    generatecomputerchoice()
  }
  const generatecomputerchoice=()=>{
    const randomchoice = choices[Math.floor(Math.random()*choices.length)];
    setComputerChoice(randomchoice);
  }
  const reset =()=>{
    window.location.reload();
  }
  useEffect(()=>{
    const combomoves = userChoice + computerChoice;
    if(userpoint <=4 && computerpoint <=4){
      if(combomoves === "stonescissors" ||combomoves === "paperstone" || combomoves ==="scissorspaper" ){
        const updateduserpoints = userpoint +1;
        setuserpoint(updateduserpoints)
        setturnpoint("User Get The Point")
        if(updateduserpoints === 5){
          setgameover(true);
          setresult("User Wins")
        }
      }
      if(combomoves === "paperscissors" ||combomoves === "scissorsstone" || combomoves ==="stonepaper"){
        const updatedcomputerpoints = computerpoint +1 ;
        setcomputerpoint(updatedcomputerpoints);
        setturnpoint("Computer gets The Points")
        if(updatedcomputerpoints === 5){
          setgameover(true);
          setresult("Computer Wins")
        }
      }
      if(combomoves === "paperpaper" ||combomoves === "stonestone" || combomoves ==="scissorsscissors"){
        setturnpoint(" No one get points")

      }
    }
  },[userChoice,computerChoice])
  return(
  <>
  <div className="main_div">
  <h1 className="heading">Rock Paper Scissors</h1>
   <div className="score">
    <h1 className="userscore">User Point: {userpoint}</h1>
    <div className="result">
    <h2>Turn Result : {turnpoint}</h2>
    <h2>Final Result : {result}</h2>
   </div>
    <h1 className="computerscore">Computer Point: {computerpoint}</h1>
   </div>
   
   <div className="choice">
    <div className="user-choices">
      <img className="user-hand" src={`../images/${userChoice}.png` } alt=""></img>
    </div>
    <div className="button_div">
    {gameover &&
      <button className="button" onClick={()=> reset()}>Restart Game</button>
    }
   </div>
    <div className="computer-choices">
      <img className="computer-hand" src={`../images/${computerChoice}.png` } alt=""></img>
      
    </div>
   </div>
   <div className="button_div">
    {choices.map((choice,index)=>
      <button className="button" key={index} onClick={()=> handleronClick(choice)} disabled={gameover}>
        {choice}
      </button>
      )}
   </div>
   
  </div>
   </>

 
)
};
export default App;
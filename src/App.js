//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32); 
  const [awayScore, setAwayScore] = useState(32);
  const [timer, setTimer] = useState(30);
  
  
// const newTimer = () => {
//     return timer.map( setTimer(timer - 1) = () => { if(newTimer <timer) ? (timer - 1)})
//   };

// timer.map( () => { 
  
//   const newTimer = setTimer(timer - 1); 
//   return newTimer
//   } 
  
// );

// let  [newTimer, setNewTimer] = useEffect(0)

 const newTimer = () => { 

  if (timer === 0 && setTimer(timer + 1) > 0) {
    timer = setInterval(setTimer, 1000)
    return newTimer + 1;
  };

  

  console.log(newTimer);
  
};




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> {homeScore} </div>
          </div>
          <div className="timer">00:{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"> {awayScore} </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => [setHomeScore(homeScore + 7)]} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => [setHomeScore(homeScore + 3)]} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => [setAwayScore(awayScore + 7)]} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => [setAwayScore(awayScore + 3)]} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="cdTimer">
          <button onClick={ () => [setTimer(timer - 1)]} className="buttons">Countdown Timer</button>
          </div>
      </section>
    </div>
  );
}

export default App;

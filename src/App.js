//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const points = 0;
  const [homeScore, setHomeScore] = useState(points);
  const [awayScore, setAwayScore] = useState(points);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Eagles</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">:03</div>
          <div className="away">
            <h2 className="away__name">Dallas</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            {" "}
            Home Touchdown
          </button>

          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            {" "}
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>

          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            {" "}
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

// stretch goals attempted

// function Timer() {
//   const [seconds, setSeconds] = useState(20);
//   useEffect(() => {
//     setSeconds(setInterval(seconds, 1000));
//   }, []);

//   useEffect(() => {
//     Tick();
//   });

//   function Tick() {
//     if (seconds >0) {
//       setSeconds (seconds - 1)
//     } else{
//       clearInterval(seconds);
//     }
//   }

//   return (
//     <div> {seconds}</div>
//   )
// }



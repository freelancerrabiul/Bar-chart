import { React } from "react";
import "./App.css";
import data from "./data.csv";
import { select, csv } from "d3";

function App() {
  // Rank: "1"
  // World: "0.185"
  // country: "China"
  // population: "1388232693"

  csv(data).then((data) => {
    data.forEach((d) => {
      d.Rank = +d.Rank;
      d.World = +d.World;
      d.population = +d.population;
    });
    console.log(data);
  });

  return (
    <div className="app">
      <svg width="960" height="500"></svg>
    </div>
  );
}

export default App;

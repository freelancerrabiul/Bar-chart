import { React } from "react";
import "./App.css";
import data from "./data.csv";
import { csv, select } from "d3";

function App() {
  const svg = select("svg");

  const render = (data) => {
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", 300)
      .attr("height", 300);
  };

  csv(data).then((data) => {
    data.forEach((d) => {
      d.Rank = +d.Rank;
      d.World = +d.World;
      d.population = +d.population;
    });
    render(data);
  });

  return (
    <div className="app">
      <svg width="960" height="500"></svg>
    </div>
  );
}

export default App;

// Rank: "1"
// World: "0.185"
// country: "China"
// population: "1388232693"

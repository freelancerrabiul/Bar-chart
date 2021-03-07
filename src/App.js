import { React } from "react";
import "./App.css";
import data from "./population";
// import { select, json, scaleLinear, max, scaleBand } from "d3";

function App() {
  data.forEach((d) => {
    console.log(d.country);
  });
  return (
    <div className="app">
      <ul></ul>
    </div>
  );
}

export default App;

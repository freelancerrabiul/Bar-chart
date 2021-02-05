import React, { Component } from "react";
import "./Main.css";

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "-", "*", "+", "."];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "-": "subtract",
  "*": "multiply",
  "+": "add",
  ".": "decimal",
};

export default class Main extends Component {
  state = {
    lastPressed: undefined,
    calc: "0",
    oparation: undefined,
  };

  handleClick = (e) => {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;

    switch (innerText) {
      case "AC": {
        this.setState({
          calc: "0",
        });
        break;
      }

      case "=": {
        const evalueted = eval(calc);
        this.setState({
          calc: evalueted,
        });
        break;
      }
      case ".": {
        const splitted = calc.split(/[\+\-\/\*]/);
        const last = splitted.slice(-1)[0];
        if (!last.includes(".")) {
          this.setState({
            calc: calc + ".",
          });
        }

        break;
      }
      default:
        {
          let exp = undefined;
          if (ops.includes(innerText)) {
            if (ops.includes(lastPressed) && innerText !== "-") {
              const lastNumIndex = calc
                .split("")
                .reverse()
                .findIndex((char) => char !== " " && nums.includes(+char));

              exp =
                calc.slice(0, calc.length - lastNumIndex) + ` ${innerText} `;
            } else {
              exp = `${calc} ${innerText} `;
            }
          } else {
            exp = calc === "0" ? innerText : calc + innerText;
          }
          this.setState({
            calc: exp,
          });
        }
        this.setState({
          lastPressed: innerText,
        });
    }
  };

  render() {
    const { currentNumber, calc } = this.state;
    console.log("currentNumber", currentNumber);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-xs-4 col-md-4 col-lg-4 col-xlg-4"></div>
          <div className="col-xs-4 col-md-4 col-lg-4 col-xlg-4">
            <div className="result text-right">{calc}</div>
            <div id="display" className="text-right">
              {calc}
            </div>
            <div className="main__Buttons">
              <button
                id="clear"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                AC
              </button>
              {nums.map((num) => (
                <button
                  onClick={this.handleClick}
                  className="nums-container btn btn-primary"
                  key={num}
                  id={ids[num]}
                >
                  {num}
                </button>
              ))}
              {ops.map((op) => (
                <button
                  onClick={this.handleClick}
                  className="ops-container btn btn-info"
                  key={op}
                  id={ids[op]}
                >
                  {op}
                </button>
              ))}

              <button
                id="equals"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                =
              </button>
            </div>
          </div>
          <div className="col-xs-4 col-md-4 col-lg-4 col-xlg-4"></div>
        </div>
      </div>
    );
  }
}


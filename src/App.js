import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);

  const handleClear = () => {
    setInput(0);
  };

  const add = () => {};
  const subtract = () => {};
  const divide = () => {};
  const multiply = () => {};
  const equals = () => {};

  const zero = () => {};
  const one = () => {};
  const two = () => {};
  const three = () => {};
  const four = () => {};
  const five = () => {};
  const six = () => {};

  const seven = () => {
    setInput(7);
  };
  const eight = () => {
    console.log(input + 8)
  };
  const nine = () => {};
  const decimal = () => {};

  console.log(input);

  return (
    <div className="app container-fluid">
      <header className="app__header text-center pt-4 pb-4">
        <h1 className="text-primary">Javascript Calculator</h1>
      </header>
      <main className="app__body">
        <div className="row text-center">
          <div className="col-xs-4 col-md-4 col-lg-4 "></div>
          <div className="col-xs-4 col-md-4 col-lg-4 bg-dark p-3 rounded">
            <input
              className="form-control block mb-1 app__input"
              id="display"
              dir="rtl"
              type="text"
              onChange={() => setInput()}
              value={input}
              autoFocus
              readOnly
            />
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <button
                  onClick={handleClear}
                  id="clear"
                  className="btn btn-danger btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  AC
                </button>
              </div>
              <div className="col-xs-3 col-md-3">
                <button
                  onClick={divide}
                  id="divide"
                  className="btn btn-info btn-block pb-3 pt-3 border-dark rounded-0 "
                >
                  /
                </button>
              </div>
              <div className="col-xs-3 col-md-3 ">
                <button
                  onClick={multiply}
                  id="multiply"
                  className="btn btn-info btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  X
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={seven}
                  id="seven"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  7
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={eight}
                  id="eight"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  8
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={nine}
                  id="nine"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  9
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={subtract}
                  id="subtract"
                  className="btn btn-info btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  -
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={four}
                  id="four"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  4
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={five}
                  id="five"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  5
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={six}
                  id="six"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  6
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={add}
                  id="add"
                  className="btn btn-info btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  +
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={one}
                  id="one"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  1
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={two}
                  id="two"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  2
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={three}
                  id="three"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  3
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <button
                  onClick={equals}
                  id="equals"
                  style={{ position: "absolute", height: "122px" }}
                  className="btn btn-success btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  =
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6 col-md-3 col-lg-6 col-xl-6 col-xxl-6">
                <button
                  onClick={zero}
                  id="zero"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  0
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <button
                  onClick={decimal}
                  id="decimal"
                  className="btn btn-primary btn-block pb-3 pt-3 border-dark rounded-0"
                >
                  .
                </button>
              </div>
              <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
            </div>
          </div>
          <div className="col-md-4 col-xs-4 col-lg-4 col-xlg-4"></div>
        </div>
      </main>
      <footer className="text-center pt-5">
        <small>Designed and Coded By</small>
        <h6>Rabiul</h6>
      </footer>
    </div>
  );
}

export default App;

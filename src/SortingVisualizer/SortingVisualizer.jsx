import React from "react";
import "./SortingVisualizer.css";

const MAX_VALUE = Math.floor(window.innerHeight * 0.7);
const MIN_VALUE = 5;
const PRIMARY_COLOR = "grey";
const SECONDARY_COLOR = "red";
const SPEEDS = [10, 20, 50, 100, 200, 500, 1000];

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: SPEEDS[0],
      array: [],
      barWidth: Math.floor((window.innerWidth * 0.7) / 99),
      bars: 100,
    };
  }

  componentDidMount() {
    this.resetArray(this.state.bars);
  }

  resetArray(bars) {
    const array = [];
    for (let i = 0; i < bars; i++) {
      array.push(random(MIN_VALUE, MAX_VALUE));
    }
    this.setState({ array });
  }

  // Disables or enables buttons to avoid changes to array while sorting
  setButtons = (disabled) => {
    const buttons = document.getElementsByClassName("btn");
    for (let k = 0; k < buttons.length; k++) {
      buttons[k].disabled = disabled;
    }
    const sliders = document.getElementsByClassName("slider");
    for (let k = 0; k < sliders.length; k++) {
      sliders[k].disabled = disabled;
    }
  };

  render() {
    const { array } = this.state;

    return (
      <div className="c">
        <div className="slider-container">
          <h4>Array Size</h4>
          <input
            type="range"
            min="8"
            max="200"
            step="2"
            defaultValue="100"
            onChange={(e) => {
              let val = e.target.value;
              this.setState(
                {
                  bars: val,
                  barWidth: Math.floor((window.innerWidth * 0.7) / (val - 1)),
                },
                this.resetArray(val)
              );
            }}
            className="slider"
            id="sizeRange"
          ></input>
          <h4>Sorting Speed</h4>
          <input
            type="range"
            min="0"
            max="6"
            step="1"
            defaultValue="0"
            onChange={(e) => {
              let val = e.target.value;
              this.setState({ speed: SPEEDS[val] });
            }}
            className="slider"
            id="speedRange"
          ></input>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${this.state.barWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

function random(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

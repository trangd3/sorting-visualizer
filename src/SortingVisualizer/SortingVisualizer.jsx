import React from "react";
import * as algo from "../algorithms";
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

  bubbleSort() {
    this.setButtons(true);
    let animations = algo.bubbleSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { j, h1, h2 } of animations) {
      let bar1 = arrayBars[j];
      let bar2 = arrayBars[j + 1];
      setTimeout(() => {
        bar1.style.height = `${h1}px`;
        bar2.style.height = `${h2}px`;
        bar1.style.backgroundColor = SECONDARY_COLOR;
        bar2.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar1.style.backgroundColor = PRIMARY_COLOR;
          bar2.style.backgroundColor = PRIMARY_COLOR;
        }, Math.floor(this.state.speed * 0.95));
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  selectionSort() {
    this.setButtons(true);
    let animations = algo.selectionSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, j, h1, h2 } of animations) {
      let bar1 = arrayBars[i];
      let bar2 = arrayBars[j];
      setTimeout(() => {
        if (h1 !== undefined) {
          bar1.style.height = `${h1}px`;
          bar2.style.height = `${h2}px`;
        } else {
          bar1.style.backgroundColor = SECONDARY_COLOR;
          bar2.style.backgroundColor = SECONDARY_COLOR;
          setTimeout(() => {
            if (j === arrayBars.length - 1) {
              bar1.style.backgroundColor = PRIMARY_COLOR;
            }
            bar2.style.backgroundColor = PRIMARY_COLOR;
          }, this.state.speed);
        }
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  insertionSort() {
    this.setButtons(true);
    let animations = algo.insertionSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, j, h1, h2 } of animations) {
      let bar1 = arrayBars[i];
      let bar2 = arrayBars[j];
      setTimeout(() => {
        bar1.style.height = `${h1}px`;
        bar2.style.height = `${h2}px`;
        bar1.style.backgroundColor = SECONDARY_COLOR;
        bar2.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar1.style.backgroundColor = PRIMARY_COLOR;
          bar2.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  shellSort() {
    this.setButtons(true);
    let animations = algo.shellSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, j, h1, h2 } of animations) {
      let bar1 = arrayBars[i];
      let bar2 = arrayBars[j];
      setTimeout(() => {
        bar1.style.height = `${h1}px`;
        bar2.style.height = `${h2}px`;
        bar1.style.backgroundColor = SECONDARY_COLOR;
        bar2.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar1.style.backgroundColor = PRIMARY_COLOR;
          bar2.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  mergeSort() {
    this.setButtons(true);
    let animations = algo.mergeSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const [k, height] of animations) {
      const bar = arrayBars[k];
      setTimeout(() => {
        bar.style.backgroundColor = SECONDARY_COLOR;
        bar.style.height = `${height}px`;
        setTimeout(() => {
          bar.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  quickSort() {
    this.setButtons(true);
    let animations = algo.quickSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, j, h1, h2 } of animations) {
      let bar1 = arrayBars[i];
      let bar2 = arrayBars[j];
      setTimeout(() => {
        bar1.style.height = `${h1}px`;
        bar2.style.height = `${h2}px`;
        bar1.style.backgroundColor = SECONDARY_COLOR;
        bar2.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar1.style.backgroundColor = PRIMARY_COLOR;
          bar2.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  heapSort() {
    this.setButtons(true);
    let animations = algo.heapSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, j, h1, h2 } of animations) {
      let bar1 = arrayBars[i];
      let bar2 = arrayBars[j];
      setTimeout(() => {
        bar1.style.height = `${h1}px`;
        bar2.style.height = `${h2}px`;
        bar2.style.backgroundColor = SECONDARY_COLOR;
        bar1.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar1.style.backgroundColor = PRIMARY_COLOR;
          bar2.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

  radixSort() {
    this.setButtons(true);
    let animations = algo.radixSort(this.state.array);
    let delay = 0;
    const arrayBars = document.getElementsByClassName("array-bar");
    for (const { i, h1 } of animations) {
      let bar = arrayBars[i];
      setTimeout(() => {
        bar.style.height = `${h1}px`;
        bar.style.backgroundColor = SECONDARY_COLOR;
        setTimeout(() => {
          bar.style.backgroundColor = PRIMARY_COLOR;
        }, this.state.speed);
      }, (delay += this.state.speed));
    }
    setTimeout(() => {
      this.setButtons(false);
    }, delay);
  }

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
        <div className="button-container">
          <button className="btn btn-secondary" onClick={() => this.resetArray(this.state.bars)}>
            Generate New Array
          </button>
          <button className="btn btn-light" onClick={() => this.bubbleSort()}>
            Bubble Sort
          </button>
          <button className="btn btn-light" onClick={() => this.selectionSort()}>
            Selection Sort
          </button>
          <button className="btn btn-light" onClick={() => this.insertionSort()}>
            Insertion Sort
          </button>
          <button className="btn btn-light" onClick={() => this.shellSort()}>
            Shell Sort
          </button>
          <button className="btn btn-light" onClick={() => this.mergeSort()}>
            Merge Sort
          </button>
          <button className="btn btn-light" onClick={() => this.quickSort()}>
            Quick Sort
          </button>
          <button className="btn btn-light" onClick={() => this.heapSort()}>
            Heap Sort
          </button>
          <button className="btn btn-light" onClick={() => this.radixSort()}>
            Radix Sort (LSD)
          </button>
        </div>
      </div>
    );
  }
}

function random(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

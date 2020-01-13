import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  updateInput = value => {
    this.setState({ input: this.state.input + value });
  };

  calculate = () => {
    var answer;
    if (isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      try {
        answer = math.evaluate(this.state.input);
      } catch (error) {
        answer = 0;
      }

      this.setState({ input: answer });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.updateInput}>7</Button>
            <Button handleClick={this.updateInput}>8</Button>
            <Button handleClick={this.updateInput}>9</Button>
            <Button handleClick={this.updateInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>4</Button>
            <Button handleClick={this.updateInput}>5</Button>
            <Button handleClick={this.updateInput}>6</Button>
            <Button handleClick={this.updateInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>1</Button>
            <Button handleClick={this.updateInput}>2</Button>
            <Button handleClick={this.updateInput}>3</Button>
            <Button handleClick={this.updateInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>.</Button>
            <Button handleClick={this.updateInput}>0</Button>
            <Button handleClick={() => this.calculate()}>=</Button>
            <Button handleClick={this.updateInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              CLR
            </ClearButton>
            <Button handleClick={this.updateInput}>(</Button>
            <Button handleClick={this.updateInput}>)</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

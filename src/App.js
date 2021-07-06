import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Lifecycles from "./lifecycles.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: ""
    };
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => {
            this.setState(state => ({showChild: !state.showChild}))
          }}
          >
          Toggle LifeCycle</button>
          <br/>
          <button onClick={() => {
            this.setState({text: this.state.text + "_hello"})
          }}>Update Text</button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;

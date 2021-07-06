import React, { Component } from "react";

class Lifecycles extends Component {
  constructor() {
    super();
    console.log("Constructor!");
  }

  componentDidMount() {
    console.log("ComponentDidMount!");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate", nextProps);
    return true;
  }

  render() {
      console.log("Render!")
      return (
          <div className="lifecycles">
              <h3>LIFECYCLES COMPONENT</h3>
              {this.props.text}
          </div>
      );
  }
}

export default Lifecycles;

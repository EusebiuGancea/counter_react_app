// Import React / Component
import React, { Component } from "react";

// We have a Counter class that extends Component imported on the
// top from React module. This Components has many methods
// Class Component
class Counter extends Component {
  render() {
    // React.createElement(h1)
    // return <h1>Hello World</h1>; //JSX expression
    // React.createElement(div)
    // console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
// We have a simple component that when rendered returns h1 element

// Export default Counter
export default Counter;

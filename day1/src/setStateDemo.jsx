import React from "react";

export default class SetStateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  async increment() {
    await this.setStateAsync({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    return (
      <div>
        SetState同步还是异步问题
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>修改</button>
      </div>
    );
  }
}

import React from "react";
/* 非受控组件 */

export default class RefsForm extends React.Component {
  constructor() {
    super();
    this.username = react.createRef();
    this.password = react.createRef();
  }

  clickHandler = (e) => {
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.username} />
        <input type="text" ref={this.password} />
        <button onClick={this.clickHandler}>提交</button>
      </div>
    );
  }
}

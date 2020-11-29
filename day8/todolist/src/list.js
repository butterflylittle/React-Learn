import React, { Component } from "react";
import Comment from "./comment";

export default class List extends Component {
  render() {
    let { data, remove } = this.props;
    return (
      <ul className="messageList">
        {data.map((item, index) => {
          return (
            <Comment {...this.props} data={item} key={index} remove={remove} />
          );
        })}
      </ul>
    );
  }
}

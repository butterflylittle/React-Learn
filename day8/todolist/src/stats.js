import React, { Component } from "react";
export default class Stats extends Component {
  render() {
    let { data, removeDone, checkAll } = this.props;
    let doneDataLen = data.filter((data) => data.select).length;
    let all = data.filter((item) => {
      return item.select;
    });
    return (
      <div className="sum">
        <label>
          <input
            type="checkbox"
            checked={all.length === data.length}
            onChange={({ target }) => {
              checkAll(target.checked);
            }}
          />

          <span>选中全部</span>
        </label>
        <p>
          当前选中{doneDataLen}项，共{data.length}条留言
        </p>
        {doneDataLen > 0 && (
          <span className="todo-clear">
            <a
              onClick={() => {
                removeDone();
              }}
            >
              删除选中项
            </a>
          </span>
        )}
      </div>
    );
  }
}

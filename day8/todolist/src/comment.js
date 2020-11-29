import React, { PureComponent, createRef } from "react";

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      vals: props.data.content,
    };
  }
  editText = createRef();
  // display = createRef();

  componentDidUpdate(prevProps, pervState) {
    if (!pervState.edit && this.state.edit) {
      this.editText.current.selectionStart = this.editText.current.value.length;
      this.editText.current.focus();
    }
  }
  render() {
    /* 渲染评论区 */
    let { data, remove, changeDone, editContent } = this.props;
    let { id, content, select } = data;
    let { edit, vals } = this.state;
    return (
      <ul className="messageList">
        <li className={edit ? "editing" : ""}>
          <h3>{data.name}</h3>

          {/* 选择按钮 */}
          <input
            className="check"
            type="checkbox"
            checked={select}
            onChange={({ target }) => {
              changeDone(id, target.checked);
            }}
          />
          <p
            onDoubleClick={() => {
              console.log(vals);
              this.setState({
                edit: true,
              });
            }}
          >
            {data.content}
          </p>
          <textarea
            className="edit"
            type="text"
            ref={this.editText}
            value={vals}
            onChange={({ target }) => {
              // 修改时先修改复制出来的title
              this.setState({
                vals: target.value,
              });
            }}
            onBlur={() => {
              // 退出编辑时，判断是否为空
              if (vals.trim()) {
                // 不为空，则将vals同步至父级
                editContent(id, vals);
                console.log(vals);
              } else {
                // 为空，则恢复本身的vals
                this.setState({
                  vals: content,
                });
              }
              this.setState({
                edit: false,
              });
            }}
          ></textarea>
          <a
            onClick={() => {
              remove(data.id);
            }}
          >
            删除
          </a>
        </li>
      </ul>
    );
  }
}

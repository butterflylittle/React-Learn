import React, { Component, Fragment } from "react";
import "./index.css";
import AddMessage from "./addMessage";
import List from "./list";
import Title from "./title";
import Stats from "./stats";

class App extends Component {
  /* 默认状态 */
  state = {
    data: [
      {
        id: 0,
        name: "用户1",
        content: "法王时代",
        select: false,
      },
      {
        id: 1,
        name: "用户2",
        content: "拆塔狂魔",
        select: true,
      },
    ],
  };
  /* 方法函数 */
  add = (userName, content) => {
    let { data } = this.state;
    data.unshift({
      id: Date.now(),
      name: userName,
      content: content,
      select: false,
    });
    this.setState({
      data,
    });
  };

  remove = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  };

  removeDone = () => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => !item.select),
    });
  };

  /* 选中留言 */
  changeDone = (id, select) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], select: select };
        break;
      }
    }
    this.setState({
      data,
    });
  };

  /* 全选留言 */
  checkAll = (select) => {
    let data = [...this.state.data];

    for (let i = 0; i < data.length; i++) {
      data[i] = { ...data[i], select: select };
    }
    this.setState({
      data,
    });
    console.log({ select });
  };

  /* 编辑内容 */
  editContent = (id, content) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], content };
        break;
      }
    }
    this.setState({
      data,
    });
  };

  render() {
    let { data } = this.state;
    return (
      <div>
        <Title />
        <section className="wrap">
          <AddMessage add={this.add} />
          {data.length > 0 && (
            <Fragment>
              <List
                data={data}
                remove={this.remove}
                changeDone={this.changeDone}
                editContent={this.editContent}
              />
              <Stats
                data={data}
                removeDone={this.removeDone}
                checkAll={this.checkAll}
              />
            </Fragment>
          )}
        </section>
      </div>
    );
  }
}

export default App;

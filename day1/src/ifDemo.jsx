import React from "react";

export default class IfDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      names: [],
    };
  }

  clickHandler = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    const { names } = this.state;
    let showView = this.state.isLogin ? <div>welcome</div> : <div>请登录</div>;
    return (
      <div>
        条件渲染 --{showView}
        <button onClick={this.clickHandler}>登录</button>
        {names.length > 0 ? (
          <div>
            {names.map((element, index) => {
              return <p key={index}>{element}</p>;
            })}
          </div>
        ) : (
          <div>请等待，数据正在请求...</div>
        )}
      </div>
    );
  }
}

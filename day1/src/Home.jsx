import React from "react";
// import MyNav from "./myNav";
import StateComponent from "./StateComponent";
import ComponentLife from "./ComponentLife";
import SetStateDemo from "./setStateDemo";
import ifDemo from "./ifDemo";
import IfDemo from "./ifDemo";
import FormDemo from "./FormDemo";
import RefsAndDOM from "./RefsAndDOM";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "文本1",
    };
  }

  clickChange = (data) => {
    this.setState({
      title: data,
    });
  };
  render() {
    /*  const nav1 = ["首页", "视频", "学习"];
    const nav2 = ["Web", "Java", "Node"]; */
    return (
      <div>
        {/*  <h1>Home</h1>
        <MyNav nav={nav1} title="路径导航" />
        <MyNav nav={nav2} title="学习导航" /> */}
        {/* <StateComponent /> */}
        {/* <ComponentLife
          title={this.state.title}
          clickChanges={this.clickChange}
        /> */}
        {/* <button onClick={this.clickChange}>修改title</button> */}
        {/* <SetStateDemo /> */}
        {/* <IfDemo /> */}
        <FormDemo />
        <RefsAndDOM />
      </div>
    );
  }
}

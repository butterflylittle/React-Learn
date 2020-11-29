import React,{Component} from "react";

export default class AddMessage extends Component{
  state={
    nameVal:"",
    vals:""
  }
  render(){
    let {add} =this.props;
    let {nameVal}= this.state;
    let {vals}= this.state;
    return(
      <div className="addMessage">

         {/* 输入昵称 */}
        <input
          id="new-name"
          placeholder="请输入昵称"
          autoComplete="off"
          type="text"
          value={nameVal}
          onChange={({target}) =>{
            this.setState({
              nameVal:target.value
            })
          }} />

           {/* 输入留言 */}
          <textarea placeholder="请输入留言" value={vals} onChange={({target})=>{
            this.setState({
              vals: target.value
            })
          }} />

          {/* 提交按钮 */}
          <button onClick={()=>{
            if(nameVal.trim() && vals.trim()){
              add(nameVal,vals)
              this.setState({
                nameVal:"",
                vals:""
              })
            }
          }}>提交留言</button>
      </div>
    )
  }
}
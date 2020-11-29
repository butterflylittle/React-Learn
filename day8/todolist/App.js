import React,{Component} from 'react';
import "./index.css";
import AddMessage from './addMessage';
import List from './list';
import Title from './title';

class App extends Component{
  /* 默认状态 */
  state={
    data:[
      {
        id: 0,
        name:"用户1",
        content:"法王时代"
      }
    ]
  }
   /* 方法函数 */
  add=(userName,content)=>{
    let {data} =this.state;
    data.push({
      id: Date.now(),
      name:userName,
      content:content
    });
    this.setState({
      data
    })
  }

  remove=(id)=>{
    let{data}=this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }

  render(){
    let {data}= this.state;
    return(
      <div>
        <Title />
        <section className="wrap">
          <AddMessage add={this.add} />
          <List data={data} remove={this.remove} />
        </section>
      </div>
    )
  }
}

export default App;
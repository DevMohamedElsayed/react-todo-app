import React, { Component } from 'react';
import TodoItems from './component/Todoitems/Todoitems';
import Additems from './component/Additems/Additems';
class App extends Component {
  state={
    items:[
      {id:1,name:"mohamed",age:25},
      {id:2,name:"ahmed",age:29},
      {id:3,name:"ali",age:30}
    ]
  }
 deletitem=(id)=>{  
 let items=this.state.items.filter(item=>{
   return item.id!==id
 })
 this.setState({items:items})
}
  addItem=(item)=>{
    item.id=Math.random();
  let items=this.state.items ;
  items.push(item);
  this.setState({items})

 }
 
  render(){
    return (
      <div className="App container">
       <h1 className="text-center"> todo list</h1> 
        <TodoItems items={ this.state.items} deletitem={this.deletitem}/>
        <Additems addItem={this.addItem}/>
      </div>
    );
  }
 
}

export default App;

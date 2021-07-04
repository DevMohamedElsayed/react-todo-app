import React, { Component } from 'react'
import './Additems.css';
class Additems extends Component{
    state={
      name:"",
      age:""
    }
    handelchange=(e)=>{
     this.setState({[e.target.id] : e.target.value})
    }
    handelsubmit=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name:" ",
            age:" " 
        })

        

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handelsubmit}>
                <input type="text" placeholder="Enter name..." id="name" onClick={this.handelchange}  />
                <input type="number" placeholder="Enter age..." id="age" onClick={this.handelchange}  />
                <input type="submit" value="add"/>
            </form>
            </div>
        )
    }
}
export default Additems ;
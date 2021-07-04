import React from 'react'
import './Todoitems.css'
const TodoItems = (props)=>{
    const{items}=props;
    const{deletitem}=props;
    let length = items.length

    const list = length?(
        items.map(item=>{
            return(
                <div key={ item.id}>
                    <span className="name"> { item.name}</span>
                    <span className="age"> { item.age}</span>
                    <span className="action icon" onClick={ ()=>deletitem(item.id)}> &times;</span>
                </div>
            ) 
    
          })
    ):(
     <p> there is no items</p>   
    )

return (
    <div className="listitems">
          <div>
                <span className="name title"> name</span>
                <span className="age title">age</span>
                <span className="action title">  del</span>
         </div>

       {list}
    </div>
)

}
export default  TodoItems ;
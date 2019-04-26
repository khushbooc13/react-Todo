import React,{Component} from 'react'
import './components.css'

class TodoItem extends Component{
    render(){
        return(
            <ul className="theList">
                 {this.props.entries.map(item=><li key={item.key} onClick={()=>this.props.deleteItem(item.key)}> {item.text}</li>)}
            </ul>
               
            
        );
    }
}

export default TodoItem
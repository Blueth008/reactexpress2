import React from 'react'
import PropTypes from 'prop-types'

import {TodoInput} from "./TodoInput";


const TodoItem = ({ onClick, completed, text,id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);


 class Todo extends React.Component{

    state={
        editing: false
    };

    handleSave=(id,text)=>{
        if(text.length === 0)
            this.props.deleteTodo(id);
        else
            this.props.onSave(id,text);
        this.setState({ editing: false })
    };

    handleDoubleClick=()=>{
        this.setState({
            editing: true
        })
    };

    render(){

        const { text, completed, onClick,id } = this.props;

        let element;
        if(this.state.editing){
            element =
                <TodoInput
                    text={text}
                    editing={this.state.editing}
                    onSave={(text)=>this.handleSave(id,text)}
                />
        } else {
            element = <div>
               <label onClick={onClick} onDoubleClick={this.handleDoubleClick}>
                   {text}
               </label>
            </div>
        }

        return(
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {element}
            </li>
        )
    }


}





Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo

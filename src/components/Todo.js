import React from 'react';
import './Todo.css';

const Todo = props => {
    let verboseClassName = 'item';
    if(props.items.completed){
        verboseClassName = verboseClassName + 'completed';
    }
    const handleClick = () => {
        props.toggleCompleted(props.items.id);
    }
    return (
        <div onClick= {handleClick} className={verboseClassName}>
            <p>{props.items.task}</p>
        </div>
    )
}
export default Todo;
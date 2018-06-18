import React from 'react';
import IndividualTodoItem from './IndividualTodoItem';

const TodoArchive = (props)=>{
        return(
            <div>
                <ul>
                {props.todos.map((todo,index)=>{
                    return(
                            <IndividualTodoItem
                            key={index}
                            todo={todo}
                            handleCheckboxClick={(todo,e)=>props.handleCheckboxClick(todo,e)}
                            handleListItemClick={(todo)=>{props.handleListItemClick(todo)}}
                            handleClick={(e,id)=>props.handleClick(e,id)}
                            handleRemoveItem={(todo,e)=>props.handleCheckboxClick(todo,e)}
                            />
                    );
                })}
                </ul>
            </div>
        );
}

export default TodoArchive;
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
                            handleClick={(itemToBeDeleted)=>props.handleClick(itemToBeDeleted)
                            }
                            />
                    );
                })}
                </ul>
            </div>
        );
}

export default TodoArchive;
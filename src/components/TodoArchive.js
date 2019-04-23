import React from 'react';
import PropTypes from 'prop-types';
import IndividualTodoItem from './IndividualTodoItem';

const TodoArchive = (props)=>{
        return(
                <ul className="app-container">
                {props.todos.map((todo,index)=>{
                    return(
                            <IndividualTodoItem
                            key={index}
                            todo={todo}
                            handleCheckboxClick={(todo,e)=>props.handleCheckboxClick(todo,e)}
                            handleListItemClick={(todo)=>{props.handleListItemClick(todo)}}
                            handleClick={props.handleClick}
    
                            />
                    );
                }).reverse()
        
            }
                </ul>
        );
}

TodoArchive.propTypes = {
  todos: PropTypes.array.isRequired,
};


export default TodoArchive;
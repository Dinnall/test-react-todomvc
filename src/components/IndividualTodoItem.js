import React from 'react';
import DeleteItem from './DeleteItem'

const IndividualTodoItem = (props)=>{

        return(
               <div >
                <li onClick={()=>props.handleListItemClick(props.todo)}
                    className={(props.todo.completed===true)?'completed' : ''}
                    
                    >

                    <div>
                        <span>
                            {props.todo.value}
                        </span>
                         <div>
                         <DeleteItem
                            handleClick={props.handleClick}
                            todo={props.todo}
                            onMouseEnter={props.hoverOn} 
                            onMouseLeave={props.hoverOff}
                            hover={props.todo.completed}
                         />
                         </div>
                        <input
                            type="checkbox"
                            onClick={(e)=>props.handleCheckboxClick(props.todo,e)}
                            checked ={props.todo.completed}
                        />
                    </div>
                </li>
                </div>
        );
    }

export default IndividualTodoItem;
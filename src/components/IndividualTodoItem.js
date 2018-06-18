import React from 'react';

const IndividualTodoItem = (props)=>{

        return(
                <li onClick={()=>props.handleListItemClick(props.todo)}
                    className={(props.todo.completed===true)?'completed' : ''}>

                    <div>
                        <span>
                            {props.todo.value}
                        </span>
                         <div>

                         </div>
                        <input
                            type="checkbox"
                            onClick={(e)=>props.handleCheckboxClick(props.todo,e)}
                            checked ={props.todo.completed}
                        />
                    </div>
                </li>
        );
    }

    export default IndividualTodoItem;
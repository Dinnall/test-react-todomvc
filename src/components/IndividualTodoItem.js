import React from 'react';
import DeleteItem from './DeleteItem'
import PropTypes from 'prop-types';

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
import React from 'react';
import DeleteItem from './DeleteItem'

const IndividualTodoItem = (props)=>{

        return(
               <div className='container'>
                <li  onClick={()=>props.handleListItemClick(props.todo)}
                    className={(props.todo.completed===true)?'completed delete' : 'delete' }>

                <input
                   className='checkbox'
                    type="checkbox"
                     onClick={(e)=>props.handleCheckboxClick(props.todo,e)}
                     checked ={props.todo.completed}
                        />

                   <p className= 'todo-list_item ' >
                            {props.todo.value}
                    </p>

                    <div className=''>
                     <DeleteItem
                            handleClick={props.handleClick}
                            todo={props.todo}
                            hover={props.todo.completed}
                       />
                       </div>

                   </li>
               </div>
        );
    }

export default IndividualTodoItem;
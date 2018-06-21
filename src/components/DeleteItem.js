import React from 'react';

const DeleteItem = (props)=>{
	// const handleDelete = (e) => {
	// 	props.handleClick(props.todo, e)
	// }
// const buttonHover = false
      return(  
        <span  className={(props.hover===true)?'deleteButton' : 'hideDeleteButton'}>
             <button onClick={(e) => props.handleClick(props.todo,e)}>
              [x]
             </button>
        </span>
    )
}

export default DeleteItem


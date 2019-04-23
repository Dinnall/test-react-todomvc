import React from 'react';

const DeleteItem = (props)=>{
      return(  
             <button               
              onClick={(e) => props.handleClick(props.todo,e)}>
              [x]
             </button>
    )
}

export default DeleteItem


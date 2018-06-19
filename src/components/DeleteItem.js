import React from 'react';

const DeleteItem = (props)=>{
      return(  
        <span className="deleteItem">
             <button onClick={(itemToBeDeleted) => { props.handleClick(itemToBeDeleted)}}>
              [x]
             </button>
        </span>
    )
}

export default DeleteItem

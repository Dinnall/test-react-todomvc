import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = (props)=>{
	const handleDelete = (e) => {
		props.handleClick(props.todo, e)
	}

      return(  
        <span className="deleteItem">
             <button onClick={(e) => props.handleClick(props.todo,e)}>
              [x]
             </button>
        </span>
    )
}

export default DeleteItem


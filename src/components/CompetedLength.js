import React from 'react';

const CompetedLength = (props)=>{
  let length = props.incomplete.length;
    return(
        <div>
            <strong>{length}</strong> {length===1? 'item':'items'} left
        </div>
    );
}

export default CompetedLength;
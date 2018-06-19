import React from 'react';
import PropTypes from 'prop-types';

const CompetedLength = (props)=>{
  let length = props.incomplete.length;
return(
        <div>
            <strong>{length}</strong> {length===1? 'item':'items'} left
        </div>
    );
}


CompetedLength.propTypes = {
  incomplete: PropTypes.bool.isRequired,
};

export default CompetedLength;
import React from 'react';

/*things to do
=> Key Stroke for Enter
=> autoFocus for input

*/
 const AddItemToList = (props)=>{
    const ENTER_KEY = 13;

        return(
          <div >
              <form>
                  <input type="text"
                         onKeyPress={e=>{if(e.charCode===ENTER_KEY||e.keyCode===ENTER_KEY){
                             props.handleKeyPress(e);
                         }}}
                         onChange ={(e)=> props.handleChange(e)}
                         value = {props.input}
                         placeholder="What's on the agenda?"
                         autoFocus
                         required
                  />
             </form>
          </div>
        );
    }

    export default AddItemToList;

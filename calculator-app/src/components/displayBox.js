import React from 'react';

const DisplayBox =(props)=> {
return(
    <input type="text" readOnly value={props.expression} className="display"/>
    )
}

export default DisplayBox;
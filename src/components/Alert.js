import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">         {/*here i use && operator in javascript that is simply used to say, firstly left part is evaluate, and if this is false or null then 2nd part is not been evaluated. And if left part is true then the 2nd part is return. */}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
    </div>}
    </div>
  )
}

export default Alert

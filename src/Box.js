import React from 'react'

function Box(props) {
    const capitallize=(words)=>{
    const text=words.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);

    }
  return (
    <div style={{height:"50px"}}>

   
   { props.alert &&
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
  <strong>{capitallize(props.alert.type)}</strong>:{props.alert.messg}
 
 
</div>
}
</div>

  )
}

export default Box

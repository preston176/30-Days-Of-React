import React from 'react'

function ImageComponent(props) {
    console.log(props.myStyle);
    
  return (
    <div><img src="../images/frontend_technologies.png" alt="frontend-tech" style={props.myStyle} key={props.id}/></div>
  )
}

export default ImageComponent
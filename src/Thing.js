import React from 'react';

export default function Thing(props) {
  
  const divStyle = {
    width: '120px',
    height: '150px',
    backgroundColor: 'lightblue',
    padding: '1em',
    margin: '1em',
    border: '1px solid #bbb',
    boxShadow: '1px 1px 3px #ccc'
  }
  
 return(
   <div style={divStyle}>
     <h2>{props.title}</h2>
     <p>{props.msg}</p>
   </div>
 );
}
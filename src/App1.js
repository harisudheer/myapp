import React from 'react'

export default function App1(props) {
  return (
    <div>Hello {props.name}. You are {props.age}</div>
  );
}

App1.defaultProps= {name:"Hari", age:25};

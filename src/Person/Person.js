import React from 'react';

const person = (props) => {
    return (
        <div>
    <h1>my name is {props.name}  and age is {props.age}</h1> 
    <p>{props.children}</p> 
    </div>
    )}

export default person
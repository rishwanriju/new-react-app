import React from 'react';
import './person.css';

const person = (props) => {
    return (
        <div className="person">
    <h1 onClick={props.click} > my name is {props.name}  and age is {props.age}</h1> 
    <p>{props.children}</p> 
    <input type="text" onChange={props.change} value={props.name}></input>
    </div>
    )}

export default person
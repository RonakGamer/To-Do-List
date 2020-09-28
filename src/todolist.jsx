import React from 'react';
import './App.css';

const Todolist = (props) => {
    return(<li> {props.text} <button className = "delete" onClick = { () => 
    props.onSelect(props.id)}>x</button></li>);
};
export default Todolist;
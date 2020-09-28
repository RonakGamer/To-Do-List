import React, { useState } from 'react';
import './App.css';
import Todolist from './todolist';

function App() {
  const [inputlist,setinputlist] = useState("");
  const [items,setitems] = useState([]);
  const itemevents = (event) => {
      setinputlist(event.target.value);
  };
  const list = () => {
      setitems((olditems) => {
          return [...olditems,inputlist]; 
         
      });
      setinputlist("");
  };
  const del = (id) => {
     setitems((olditems) => {
    return olditems.filter((arelem,index) => {
      return index !== id;
    });
     }) 
  };
  return (
   <div className = "app-background">
     <div className = "app-box">
       <div className = "header">To Do List</div>
       <br />
       <input type = "text" placeholder = "Enter Task" onChange = {itemevents} value = {inputlist}/>
       <button onClick = {list}  className = "btn"> + </button>
       <ul>
         {items.map( (itemval,index) => {
           return(<Todolist key = {index}
           id = {index}
           text = {itemval}
             onSelect = {del}
           />)
         })}
       </ul>
     </div>
   </div>
  );
}

export default App;

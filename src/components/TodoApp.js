import React, { useState } from "react";
import "./todoapp.css";
import Lists from "./List";
 function TodoApp(){
     const[task,setTask]=useState("");
     const[items,setItems]=useState([]);//array


     const handleChange=(e)=>{
         setTask(e.target.value);
     }
     const list=()=>{
      setItems((allItems)=>{
          return[...allItems,task];
      })
      setTask("");

     }
     
    const deleteIt=(id)=>{
        setItems((items)=>{
            return items.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
    
  
  return(
         <div className="main-div">
         <div className="todo">
             <h1 className="heading">ToDo List</h1>
             <input 
             type="text" 
             value={task}
             placeholder="Enter task" 
             name="text" id="text" 
             onChange={handleChange}
             />
             <button class="add-btn" onClick={list}>Add</button>

             <ol>
                 {/* <li>{task}</li> */}
                {
                    items.map((itemval,index)=>{
                       return <Lists id={index} key={index} text={itemval} 
                       onSelect={deleteIt}
                       
                       />
                    })
                } 
             </ol>


         </div>
         </div>
     )
 }
 export default TodoApp;
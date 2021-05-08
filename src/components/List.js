import React, { useState } from "react";
import "./todoapp.css";
const Lists=(props)=>{
 const [line,setLine]=useState(false);

        return (
        <div className="list-part">
            <li>{props.text}</li>
            
                <i class="fa fa-trash-o"onClick={()=>{
                props.onSelect(props.id)}}></i>
                

  
        </div>
        );
};
export default Lists;
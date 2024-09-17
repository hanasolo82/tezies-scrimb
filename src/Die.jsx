import React from "react";

export default function Die(props) {


    return (

        <div 
        className="die" 
        
        >
        <p className="number">{props.value}</p> 
        </div>
    )
}
import React from "react"; 
import "./header.css" 

function Header(props){
  return(
    <div className="header">
    <div className="title col-md-3" ><h3>{props.children}</h3></div>
    <div className="col-md-10"><h3>Score: {props.score}</h3>
    <div className="col-md-12"><h3>Highscore:  {props.highscore}</h3></div> 
    </div>
  </div>
  )
} 

export default Header; 
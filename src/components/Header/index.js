import React from "react"; 
import "./header.css" 

const Header = props =>(
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="score">
      Score: {props.score} Highscore:  {props.highscore}
    </div>
  </div>
); 

export default Header; 
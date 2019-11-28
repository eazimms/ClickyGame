import React from "react"; 
import "./card.css"; 

function Card(props){
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}>
        </img>
        <div className="content">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  ); 
}

export default Card; 
import React from 'react';
import './log.css';

// import Rating from '../rating/rating';

export default function Log(props) {
  return (
    <div className="Log">
      <div className="Log_row">
        <div className="Log_title">
            <h3>Type: {props.climb_type}</h3>
            <h3>Difficulty: {props.difficulty}</h3>
            <h3>Attempts: {props.attempts}</h3>
            <h3>Rating: {props.rating}</h3>   
        </div>
        {/* <Rating value={props.rating}/> */}
      </div>      
      <div className="bookmark__description">
        {props.description}
      </div>
    </div>
  ) 
}
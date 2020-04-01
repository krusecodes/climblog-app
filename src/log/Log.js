import React, { Component } from 'react';
import './log.css';


class ClimbFeed extends Component {
  state = {
    Log: [],
};

  static defaultProps ={
    onDeleteNote: () => {},
  }

  handleClickDelete = e => {
    e.preventDefault()
    const logId = this.props.id
  
  // handleDeleteNote = noteId => {
  //     this.setState({
  //         notes: this.state.notes.filter(note => note.id !== noteId)
  //     });
  // };  

    fetch(`http://localhost:8000/log/${logId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.handleDeleteLog(logId)
        // allow parent to perform extra behaviour
        this.onDeleteNote(logId)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  render() {    
    return (
      <div className="Log">
        <div className="Log_row">
          <div className="Log_title">
              <h3>Type: {this.props.climb_type}</h3>
              <h3>Difficulty: {this.props.difficulty}</h3>
              <h3>Attempts: {this.props.attempts}</h3>
              <h3>Rating: {this.props.rating}</h3> 
              <h3>Rating: {this.props.id}</h3> 
              <button onClick={(e) => this.handleClickDelete(e)}>Delete</button>
          </div>
        </div>      
      </div>
    ) 
  }
}

export default ClimbFeed;

// ClimbFeed.defaultProps = {
//   Log: []
// };

// import React from 'react';
// import './log.css';

// // import Rating from '../rating/rating';

// export default function Log(props) {
//   return (
//     <div className="Log">
//       <div className="Log_row">
//         <div className="Log_title">
//             <h3>Type: {props.climb_type}</h3>
//             <h3>Difficulty: {props.difficulty}</h3>
//             <h3>Attempts: {props.attempts}</h3>
//             <h3>Rating: {props.rating}</h3>   
//         </div>
//         {/* <Rating value={props.rating}/> */}
//       </div>      
//       <div className="bookmark__description">
//         {props.description}
//       </div>
//     </div>
//   ) 
// }

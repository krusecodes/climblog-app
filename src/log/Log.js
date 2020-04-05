import React, { Component } from 'react';
import './log.css';

class Log extends Component {

////

  // state = {
  //   Log: [],
  // };

/////  

/////

  // static defaultProps ={
  //   onDeleteNote: () => {},
  // }

/////  

  // var removeClimb = React.createClass({
  //   onClick: function(e){
  //     handleClickDelete(e)
  //     climbs(this.props.climbs)
  //   }
  // })

  /////
      // handleClickDelete = e => {
      //   e.preventDefault()
      //   const logId = this.props.id
      //   console.log(logId);
      
      // // handleDeleteNote = noteId => {
      // //     this.setState({
      // //         notes: this.state.notes.filter(note => note.id !== noteId)
      // //     });
      // // };  
    
      //   fetch(`http://localhost:8000/log/${logId}`, {
      //     method: 'DELETE',
      //     // method: 'GET',
      //     headers: {
      //       'content-type': 'application/json'
      //     },
      //   })
      //     .then(res => {
      //       if (!res.ok)
      //         return res.json().then(e => Promise.reject(e))
      //       return res.json()
      //     })
      //     .then(() => {
      //       this.handleDeleteLog(logId)
      //       // allow parent to perform extra behaviour
      //       this.onDeleteNote(logId)
      //     })
      //     // .then(() => {
      //     //   this.props.climbs();
      //     // })
      //     .catch(error => {
      //       console.error({ error })
      //     })
      // }
  
/////


  render() {    
    console.log(this.props);
    const {
      climb_type,
      difficulty,
      attempts,
      rating,
      id,
      what_i_learned
    } = this.props.log
    return (
      <div className="Log">
        <div className="Log_row">
          <div className="Log_title">
              <h3>Type: {climb_type}</h3>
              <h3>Difficulty: {difficulty}</h3>
              <h3>Attempts: {attempts}</h3>
              <h3>Rating: {rating}</h3> 
              <h3>What I learned: {what_i_learned}</h3>
              <h3>Rating: {id}</h3> 
              <button onClick={(e) => this.props.handleClickDelete(id)}>
              Delete</button>
          </div>
        </div>      
      </div>
    ) 
  }
}

export default Log;

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

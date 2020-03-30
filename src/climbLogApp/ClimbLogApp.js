import React, { Component } from 'react';
import './ClimbLogApp.css'
// import ClimbData from '../store.json'
import ClimbFeed from '../ClimbFeed/ClimbFeed'
import Fab from '../fab/fab';

class ClimbLogApp extends Component {
  render() {
    console.log(this.props.clim)
    return (
      <div className="bookmarkApp">
          <h2>ClimbLog</h2>
          <ClimbFeed climbs={this.props.climbs}/>  
          <Fab showForm={this.props.showForm}/>
      </div>
    );
  }
}

export default ClimbLogApp;

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         {ClimbData.map((climbDetail, index)=> {
//             return <div className="container"><div className="climbCard">
                
                // <h3>Type: {climbDetail.type}</h3>
                // <h3>Difficulty: {climbDetail.difficulty}</h3>
                // <h3>Attempts: {climbDetail.attempts}</h3>
                // <h3>Rating: {climbDetail.rating}</h3>
                
//                 </div>
//                 </div>
//         })}
//         <div className="footer">
//           <Fab showForm={this.props.showForm}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default ClimbLogApp;
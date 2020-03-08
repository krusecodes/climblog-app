import React, { Component } from 'react';
import './ClimbLogApp.css'
import ClimbData from '../store.json'
import Fab from '../fab/fab';

class App extends Component {
  render() {

    return (
      <div className="App">
        {ClimbData.map((climbDetail, index)=> {
            return <div>
                <h3>Type: {climbDetail.type}</h3>
                <h3>Difficulty: {climbDetail.difficulty}</h3>
                <h3>Attempts: {climbDetail.attempts}</h3>
                <h3>Rating: {climbDetail.rating}</h3>
                <Fab showForm={this.props.showForm}/>
                </div>
        })}
      </div>
    );
  }
}

export default App;
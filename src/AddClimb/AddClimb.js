import React, { Component } from 'react';
import './addclimb.css'

class AddClimb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  climbTypeChanged(climb_type) {
    this.setState({
      climb_type
    });
  }

  difficultyChanged(difficulty) {
    this.setState({
      difficulty
    });
  }

  attemptsChanged(attempts) {
    this.setState({
      attempts
    });
  }

  ratingChanged(rating) {
    this.setState({
      rating
    });
  }

  what_i_learnedChanged(what_i_learned) {
    this.setState({
      what_i_learned
    });
  }

handleSubmit(e) {
  console.log(e);
  e.preventDefault();
  console.log(this.state);
  
  const climbLog = (({ climb_type, difficulty, attempts, rating, what_i_learned}) => ({ climb_type, difficulty, attempts, rating, what_i_learned}))(this.state);
  const url = 'http://localhost:8000/log';
  const options = {
    method: 'POST',
    body: JSON.stringify(climbLog),
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch(url, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data => {
    // this.setState({
    //   climb_type: null,
    //     difficulty: null,
    //     attempts: 1,
    //     rating: 1,
    //     what_i_learned: null
    // });
    console.log(data);
    
    this.setState(data);
    this.props.handleAdd(data);
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });  
};

  render() {  
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";
  return (
    <div>
    <h2>Add a Climb</h2>  
    { error }
    <form className="addclimb__form" onSubmit={e => this.handleSubmit(e)}>

    <select id="Type"
      value={this.state.data.climb_type}
      onChange={e => this.climbTypeChanged(e.target.value)}
    >
        <option>type</option>
        <option>Top roping</option>
        <option>Lead climbing</option>
        <option>Sport climbing</option>
        <option>Trad climbing</option>
        <option>Bouldering</option>
        <option>Free solo climbing</option>
        <option>Deep water soloing</option>
  </select>

    <select id="Type"
      value={this.state.data.difficulty}
      onChange={e => this.difficultyChanged(e.target.value)}
    >
        <option >difficulty</option>
        <option >V1</option>
        <option>V2</option>
        <option >V3</option>
        <option >V4</option>
        <option >V5</option>
        <option>V6</option>
        <option >V7</option>
        <option >V8</option>
        <option>V9</option>
        <option>V10</option>
        <option>V11</option>
        <option>V12</option>
        <option>V13</option>
  </select>

  <label htmlFor="attempts">Number of Attempts</label>
    <input 
        type="number" 
        name="attempts" 
        id="rating" 
        min="1"
        max="100"
        value={this.state.data.attempts}
        onChange={e => this.attemptsChanged(e.target.value)}    
    />

  <label htmlFor="rating">Rating: </label>
    <input 
        type="number" 
        name="rating" 
        id="rating" 
        min="1"
        max="5"
        value={this.state.data.rating}
        onChange={e => this.ratingChanged(e.target.value)}
    />

  <label htmlFor="what_i_learned">What I learned: </label>
    <input 
        type="text" 
        name="learning" 
        id="learning" 
        value={this.state.data.what_i_learnedChanged}
        onChange={e => this.what_i_learnedChanged(e.target.value)}
    />  

<div className="addbookmark__buttons">
  <button onClick={e => this.props.showForm(false)}>Cancel</button>
  <button type="submit" >Save</button>
</div>  
</form>
</div>



  );
 }
}

export default AddClimb;
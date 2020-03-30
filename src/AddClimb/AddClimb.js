import React, { Component } from 'react';
import './addclimb.css'
// import ClimbData from '../store.json'


class AddClimb extends Component {
  constructor(props){
    super(props);
    this.state = {
      climb_type: null,
      difficulty: null,
      attempts: 1,
      rating: 1,
    }
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
    
  //   fetch('/api/form-submit-url', {
  //     method: 'POST',
  //     body: data,
  //   });
  // }

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

// handleSubmit(e) {
//   e.preventDefault();
//   const climbLog = (({climbType, difficulty, attempts, rating}) =>({title, url, description, rating}))(this.state);
//   const url = {ClimbData};
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(climbLog)
//   }
// };

// fetch(url, options)
// .then(res => {
//   if(!res.ok) {
//     throw new Error('Something went wrong, please try again later');
//   }
//   return res.json();
// })
// .then(data => {
//   this.setState({
//     climbType: null,
//       difficulty: null,
//       attempts: 1,
//       rating: 1
//   });
//   this.props.handleAdd(climbLog);
// })
// .catch(err => {
//   this.setState({

//     error: err.message
//   });
// });

handleSubmit(e) {
  console.log(e);
  e.preventDefault();
  const climbLog = (({climb_type, difficulty, attempts, rating}) => ({climb_type, difficulty, attempts, rating}))(this.state);
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
    this.setState({
      climb_type: null,
        difficulty: null,
        attempts: 1,
        rating: 1
    });
    this.props.handleAdd(climbLog);
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });  
};

//   fetch(url, options)
//     .then(res => {
//       if(!res.ok) {
//         throw new Error('Something went wrong, please try again later');
//       }
//       return res.json();
//     })
//     .then(data => {
//       this.setState({
//         title: "",
//         url: "",
//         description: "",
//         rating: 1
//       });
//       this.props.handleAdd(bookmark);
//     })
//     .catch(err => {
//       this.setState({
//         error: err.message
//       });
//     });
// }

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
      value={this.state.climb_type}
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
      value={this.state.difficulty}
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
        value={this.state.attempts}
        onChange={e => this.attemptsChanged(e.target.value)}    
    />

  <label htmlFor="rating">Rating: </label>
    <input 
        type="number" 
        name="rating" 
        id="rating" 
        min="1"
        max="5"
        value={this.state.rating}
        onChange={e => this.ratingChanged(e.target.value)}
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
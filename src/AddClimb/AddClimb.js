import React, { Component } from 'react';
import './addclimb.css'
// import ClimbData from '../store.json'


class AddClimb extends Component {
  constructor(props){
    super(props);
    this.state = {
      climbType: null,
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

  climbTypeChanged(climbType) {
    this.setState({
      climbType
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
  e.preventDefault();
  const climbLog = (({climbType, difficulty, attempts, rating}) =>({climbType, difficulty, attempts, rating}))(this.state);
  const url = 'http://localhost:3000/feed';
  const options = {
    method: 'POST',
    body: JSON.stringify(climbLog)
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
      climbType: null,
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
    <form className="addclimb__form" onSubmit={e => this.handleSubmit(e)}>

    {/* <label for="img">Select image:</label>
    <input type="file" id="img" name="img" accept="image/*"/> */}

    <select id="Type"
      value={this.state.climbType}
      onChange={e => this.climbTypeChanged(e.target.value)}
    >
        <option value="Sort by type">type</option>
        <option value="Top roping">Top roping</option>
        <option value="Lead climbing">Lead climbing</option>
        <option value="Sport climbing">Sport climbing</option>
        <option value="Trad climbing">Trad climbing</option>
        <option value="Bouldering">Bouldering</option>
        <option value="Free solo climbing">Free solo climbing</option>
        <option value="Deep water soloing">Deep water soloing</option>
  </select>

    <select id="Type"
      value={this.state.difficulty}
      onChange={e => this.difficultyChanged(e.target.value)}
    >
        <option value="Sort by difficulty">difficulty</option>
        <option value="Option1">V1</option>
        <option value="Option2">V2</option>
        <option value="Option3">V3</option>
        <option value="Option4">V4</option>
        <option value="Option5">V5</option>
        <option value="Option6">V6</option>
        <option value="Option7">V7</option>
        <option value="Option8">V8</option>
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

  {/* <label for="fname">What I learned</label>
  <input type="text" id="fname" name="firstname" placeholder="Flag left foot..."/> */}

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
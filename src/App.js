import React, { Component } from 'react';
import ClimbLogApp from './climbLogApp/ClimbLogApp'
import AddClimb from './AddClimb/AddClimb'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      climbs: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/feed';
    const options = {
      method: 'GET',
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          climbs: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(climbs) {
    this.setState({
      climbs: [...this.state.climbs, climbs],
      showAddForm: false
    });
  }

  render() {
    const page = this.state.showAddForm
          ? <AddClimb 
                showForm={show => this.setShowAddForm(show)} 
                handleAdd={bookmark => this.addBookmark(bookmark)}/>
          : <ClimbLogApp climbs={this.state.climbs} showForm={show => this.setShowAddForm(show)}/>; 
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;

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

  //wrap fetch in a function
  //call function with this.functionName
  //pass that function to climbFeed

  componentDidMount() {
    
    const url = 'http://localhost:8000/log';
    const options = {
      method: 'GET',
      headers: {
        // "Authorization": "Bearer 601871b7-a853-4c78-827b-d38633f352e9",
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);

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
        handleAdd={bookmark => this.addBookmark(bookmark)} />
      : <ClimbLogApp
        climbs={this.state.climbs}
        showForm={show => this.setShowAddForm(show)}
        handleDeleteLog={this.state.handleDeleteLog}
        data={this.state.data}
      />;
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
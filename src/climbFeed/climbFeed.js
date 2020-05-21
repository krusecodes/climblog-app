import React, { Component } from 'react';
import './climbFeed.css';
import Log from '../log/Log';
// import Bookmark from '../bookmark/bookmark';

class ClimbFeed extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     climbs: [],
  //     showAddForm: false
  //   };
  // }

// reLoadData(){
//   window.location.reload(true);
// }

  static defaultProps ={
    onDeleteNote: () => {},
  }

  // componentDidMount() { 
  //   const url = 'http://localhost:8000/log';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       // "Authorization": "Bearer 601871b7-a853-4c78-827b-d38633f352e9",
  //       "Content-Type": "application/json"
  //     }
  //   };

  // loadData(fetch){
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       // "Authorization": "Bearer 601871b7-a853-4c78-827b-d38633f352e9",
  //       "Content-Type": "application/json"
  //     }
  //   };
  //   fetch('http://localhost:8000/log', options)
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error('Something went wrong, please try again later.');
  //     }
  //     return res;
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);

  //     this.setState({
  //       climbs: data,
  //       error: null
  //     });
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: err.message
  //     });
  //   });
  // }
      

  handleClickDelete = logId => {
    // e.preventDefault()
    // const logId = this.props.id
    // console.log(this.props);
  
  // handleDeleteNote = noteId => {
  //     this.setState({
  //         notes: this.state.notes.filter(note => note.id !== noteId)
  //     });
  // };  

    fetch(`http://localhost:8000/log/${logId}`, {
      method: 'DELETE',
      // method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        console.log(res);
        if (!res.ok) return res.json();
        
          // return res.json().then(e => Promise.reject(e))
        
      })
      // .then(() => {
      //   this.handleDeleteLog(logId)
      //   // allow parent to perform extra behaviour
      // })
      .then(() => {
        this.props.loadData();
        console.log('loadData');
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    // {}
    console.log(this.props);
    // const climbs = this.props.climbs.map((log, i) => log);
    const climbs = this.props.climbs.map((log, i) => {
      console.log(log);
      return <Log log={log} key={i} handleClickDelete={this.handleClickDelete}/>});
    // console.log(climbs)      
    return (
      <div className="bookmarkList">
        {climbs}
      </div>
    );
  }
}

// ClimbFeed.defaultProps = {
//   Log: []
// };

export default ClimbFeed;
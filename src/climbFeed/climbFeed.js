import React, { Component } from 'react';
import './climbFeed.css';
import Log from '../log/Log'
// import Bookmark from '../bookmark/bookmark';

class ClimbFeed extends Component {
  // state = {
  //   Log: [],
  // };

  static defaultProps ={
    onDeleteNote: () => {},
  }

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
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.handleDeleteLog(logId)
        // allow parent to perform extra behaviour
        this.onDeleteNote(logId)
        this.props.climbs()
      })
      // .then(() => {
      //   this.props.climbs();
      // })
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
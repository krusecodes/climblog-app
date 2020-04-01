import React, { Component } from 'react';
import './climbFeed.css';
import Log from '../log/Log'
// import Bookmark from '../bookmark/bookmark';

class ClimbFeed extends Component {
  render() {
    {}
    // const climbs = this.props.climbs.map((log, i) => log);
    const climbs = this.props.climbs.map((log, i) => {return <Log { ...log } key={i} handleDeleteLog={this.props.handleDeleteLog}/>});
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
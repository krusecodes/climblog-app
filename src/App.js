import React, { Component } from 'react';
import ClimbLogApp from './climbLogApp/ClimbLogApp'
import AddClimb from './AddClimb/AddClimb'
import Popup from './Popup/Popup'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      climbs: [],
      showAddForm: false, 
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
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
        console.log(err);
        
        // this.setState({
        //   error: err.message
        // });
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
          : <ClimbLogApp 
              climbs={this.state.climbs} 
              loadData={this.loadData}
              showForm={show => this.setShowAddForm(show)}/>;
              // handleDeleteLog={this.state.handleDeleteLog}          
    return (
      <div className="App">
       <div>
       <h1> Simple Popup Example In React Application </h1>
       <button className="launchButton" onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>
       {this.state.showPopup ?
         <Popup
          text='Click "Close Button" to hide popup'
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div> 
        {page}
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import ClimbLogApp from './climbLogApp/ClimbLogApp'
// import AddClimb from './AddClimb/AddClimb'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import landingPage from './landingPage/landingPage'


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       climbs: [],
//       showAddForm: false,
//       showApp: false
//     };
//   }

//   componentDidMount() {
//     this.loadData();
//   }

//   loadData = () => {
//     const url = 'http://localhost:8000/log';
//     const options = {
//       method: 'GET',
//       headers: {
//         // "Authorization": "Bearer 601871b7-a853-4c78-827b-d38633f352e9",
//         "Content-Type": "application/json"
//       }
//     };
//     fetch(url, options)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Something went wrong, please try again later.');
//         }
//         return res;
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);

//         this.setState({
//           climbs: data,
//           error: null
//         });
//       })
//       .catch(err => {
//         console.log(err);
        
//         // this.setState({
//         //   error: err.message
//         // });
//       });
//   }

//   setShowAddForm(show) {
//     this.setState({
//       showAddForm: show
//     });
//   }

//   setShowApp(show) {
//     this.setState({
//       showApp: show
//     })
//   }

//   addBookmark(climbs) {
//     this.setState({
//       climbs: [...this.state.climbs, climbs],
//       showAddForm: false
//     });
//   }

//   // let component = null;
//   // const page1 = this.state.showApp
//   // const page2 = this.state.showAddForm
//   // switch(this.state.shownGroup) {
//   //   case 1:
//   //     component = <ClimbLogApp climbs={this.state.climbs} 
//   //       loadData={this.loadData}
//   //       showForm={show => this.setShowAddForm(show)} handleAdd={bookmark => this.addBookmark(bookmark)}/>;
//   //     break;
//   //   case 2:
//   //     component = <AddClimb showForm={show => this.setShowAddForm(show)}/>;
//   //     break;
//   //   default:
//   //     component = <landingPage />;
//   // }

//   // renderSwitch({ display }){ 
//   //   if ()
//   // }

//   render() {

//     const page = this.state.showAddForm
//           ? <AddClimb 
//                 showForm={show => this.setShowAddForm(show)} 
//                 handleAdd={bookmark => this.addBookmark(bookmark)}/>
//           : <ClimbLogApp 
//               climbs={this.state.climbs} 
//               loadData={this.loadData}
//               showForm={show => this.setShowAddForm(show)}/>;
//               // handleDeleteLog={this.state.handleDeleteLog}
//     return (
//       // <Router>
//       // <div>
//       //   <nav>
//       //     <ul>
//       //       <li>
//       //         <Link to="/">Instructions</Link>
//       //       </li>
//       //       <li>
//       //         {/* <Link to="/ClimbLogApp">ClimbLog</Link> */}
//       //         <a href="/ClimbLogApp"><ClimbLogApp/></a>
//       //       </li>
//       //       <li>
//       //         <Link to="/add_climb">Add Climb</Link>
//       //       </li>
//       //     </ul>
//       //   </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         // <Switch>
//           {/* <Route path="/ClimbLogApp">
//             <ClimbLogApp />
//           </Route> */}
//           {/* <Route path="/add_climb">
//             <AddClimb />
//           </Route>
//           <Route path="/">
//             <landingPage />
//           </Route>
//         </Switch>
//       </div>
//     </Router> */}
//       <div className="App">
//         {page}
//       </div>
//     );
//   }
// }

// export default App;
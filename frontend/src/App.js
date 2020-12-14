import React, { Component }  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing.js';
import Room from './components/Room.js';




export default class App extends Component {
  render() {
    return (
      <div>
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/room" component={Room} />
    </Router>
      </div>
    )
  }
}



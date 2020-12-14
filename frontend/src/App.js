import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing.js';
import Room from './components/Room.js';


const App = () => {
    return (
      <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/room" component={Room} />
    </Router>
    );
  }

  export default App;


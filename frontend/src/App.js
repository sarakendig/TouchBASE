import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import firebase, { auth, provider } from './firebase.js';

export default class App extends Component {
    constructor() {
      super();
      this.state = {
        messages: '',
        username: '',
        user: null 
      }
      this.login = this.login.bind(this); 
      this.logout = this.logout.bind(this); 
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } 
      });
    }


    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    logout() {
        auth.signOut()
          .then(() => {
            this.setState({
              user: null
            });
          });
      }
    

    login() {
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }


  render() {
    return (
      <Router>
      <Header> </Header>
     
      <Switch>
      <Route exact path="/">
            <Landing/>
          </Route>


      </Switch>
        
      <Footer> </Footer>
      </Router>
    )
  }
}


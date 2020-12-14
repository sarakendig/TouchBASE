import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            
        <footer className="page-footer grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text darken-2">About</h5>
                <p className="grey-text">You can use rows and columns here to organize your footer content. <a className="grey-text " href="https://github.com/sarakendig/TouchBASE">Documentation</a></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="grey-text darken-2">Links</h5>
                <ul>
                  <li><a className="grey-text " href="https://www.linkedin.com/in/sarakendig/">LinkedIn</a></li>
                  <li><a className="grey-text " href="https://sarakendig.com/">Portfolio</a></li>
                  <li><a className="grey-text " href="https://github.com/sarakendig">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright center">
            <div className="container grey-text darken-3">
            © 2020, Sara Kendig. All Rights Reserved.
            
            </div>
          </div>
        </footer>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            
        <footer class="page-footer grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="grey-text darken-2">About</h5>
                <p class="grey-text">You can use rows and columns here to organize your footer content. <a class="grey-text " href="https://github.com/sarakendig/TouchBASE">Documentation</a></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="grey-text darken-2">Links</h5>
                <ul>
                  <li><a class="grey-text " href="https://www.linkedin.com/in/sarakendig/">LinkedIn</a></li>
                  <li><a class="grey-text " href="https://sarakendig.com/">Portfolio</a></li>
                  <li><a class="grey-text " href="https://github.com/sarakendig">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright center">
            <div class="container grey-text darken-3">
            © 2020, Sara Kendig. All Rights Reserved.
            
            </div>
          </div>
        </footer>
            </div>
        )
    }
}

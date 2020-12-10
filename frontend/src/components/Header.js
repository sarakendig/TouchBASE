import React, { Component } from 'react'
import {BrowserRouter as Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                 <header>

                <div className="navbar-fixed  grey darken-4">
                <nav>
                    <div className="nav-wrapper  grey darken-4">
                    <h5 className="brand-logo center">TouchBASE</h5>
                    <ul className="left">
                        <li><Link href="/"><i className="large material-icons">home</i></Link></li>
                    </ul>

                    <ul class="right">

                    {this.props.user ?
                
                    <li><Link id="logout" class ="grey-text text-darken-4" onClick={this.logout}>Logout | </Link></li>

                    :

                    <li><Link id="login" class ="grey-text text-darken-4" onClick={this.login}> Log In</Link></li>

                    }
                
                    </ul>
                    </div>
                </nav>
                </div>

                </header>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                 <header>

                <div className="navbar-fixed  black">
                <nav>
                    <div className="nav-wrapper">
                    <Link href="/" class="brand-logo"><i class="material-icons">home</i></Link>
                

                    <ul className="right">

                    {this.props.user ?
                
                    <li><Link id="logout" className="white-text text-darken-4" onClick={this.logout}>Logout </Link></li>

                    :

                    <li><Link id="login" className="white-text text-darken-4" onClick={this.login}> Log In</Link></li>

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

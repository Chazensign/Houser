import React, { Component } from 'react';
import './Header.css'
import logo from './houser_logo.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <header>
        <div>
          <div className="logo-title">
            <img className="logo" src={logo} />
            <h1 className="title">Houser</h1>
          </div>
        </div>
      </header>
    )
  }
}
 
export default Header;
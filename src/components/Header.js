import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <header>
    <div className='logo-title'>
      <div>Logo</div>
      <h1 className='title'>Houser</h1>
      </div>
      </header>
     );
  }
}
 
export default Header;
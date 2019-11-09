import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import House from './House/House';
import {getHouses} from '../ducks/reducer'
import {connect} from 'react-redux'

class Dashboard extends Component {
  
  componentDidMount() {
    // getHouses()
  }
  render() { 
    return ( <div>
      Dashboard
      <Link to='/step1'><button>Add New Property</button></Link>
      <div>
        <House/>
      </div>
    </div> );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}
 
export default connect(mapStateToProps, {getHouses} )(Dashboard);
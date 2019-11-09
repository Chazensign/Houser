import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import House from './House/House';
import {getHouses} from '../ducks/reducer'
import {connect} from 'react-redux'
import './Dashboard.css'

class Dashboard extends Component {
  
  componentDidMount() {
    // getHouses()
  }
  render() { 
    return ( <div>
      <div className='dash-head'>
      <div>Dashboard</div>
      <Link to='/wizard/step1'><button>Add New Property</button></Link>
      </div>
      <div className='green-back'>
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
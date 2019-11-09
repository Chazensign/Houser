import React, { Component } from 'react';
import {updateInfo} from '../ducks/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class Step1 extends Component {
  
  handleChange(event) {
    this.props.updateInfo(event.target)
  }

  render() { 
    
    
    return (
      <div>
        <div>Property Name</div>
        <input
          name="propName"
          value={this.props.propName}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div>Address</div>
        <input
          name="address"
          value={this.props.address}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div>City</div>
        <input
          name="city"
          value={this.props.city}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div>State</div>
        <input
          name="state"
          value={this.props.state}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div>Zip</div>
        <input
          name="zip"
          value={this.props.zip}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div className='nav-box'>
          <Link to='/' ><button>Previous Step</button></Link>
          <Link to='/step2' ><button>Next Step</button></Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    propName: state.propName,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
  }
}
 
export default connect(mapStateToProps, {updateInfo})(Step1);
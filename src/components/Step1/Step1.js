import React, { Component } from 'react';
import {updateInfo} from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Step1.css'

class Step1 extends Component {
  
  handleChange(event) {
    this.props.updateInfo(event.target)
  }

  render() { 
    
    
    return (
      <div className="all-input">
        <div className="input-title">Property Name</div>
        <input
          name="propName"
          value={this.props.propName}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div className="input-title">Address</div>
        <input
          className="address"
          name="address"
          value={this.props.address}
          type="text"
          onChange={event => this.handleChange(event)}
        />
        <div className="csz">
          <div className="city">
            <div className="input-title">City</div>
            <input
              name="city"
              value={this.props.city}
              type="text"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="state">
            <div className="input-title">State</div>
            <input
              name="state"
              value={this.props.state}
              type="text"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="zip">
            <div className="input-title">Zip</div>
            <input
              name="zip"
              value={this.props.zip}
              type="text"
              onChange={event => this.handleChange(event)}
            />
          </div>
        </div>
        <div className="nav-box1">
          <Link to="/wizard/step2">
            <button className="dg-button">Next Step</button>
          </Link>
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
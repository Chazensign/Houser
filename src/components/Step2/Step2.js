import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {updateInfo} from '../../ducks/reducer'
import {connect} from 'react-redux'
import './Step2.css'


class Step2 extends Component {
  render() { 
    return (
      <div className="all-input">
        <div className="input-title">Image URL</div>
        <input
          className="address"
          name="img"
          value={this.props.img}
          onChange={e => this.props.updateInfo(e.target)}
        />
        <div className="nav-box">
          <Link to="/wizard/step1">
            <button className="dg-button">Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button className="dg-button">Next Step</button>
          </Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    img: state.img
  }
}
 
export default connect(mapStateToProps, {updateInfo})(Step2);
 

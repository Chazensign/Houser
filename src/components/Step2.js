import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {updateInfo} from '../ducks/reducer'
import {connect} from 'react-redux'


class Step2 extends Component {
  render() { 
    return (
      <div>
        <div>Image URL</div>
        <input name="img" value={this.props.img} onChange={e => this.props.updateInfo(e.target)}/>
        <div className="nav-box">
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next Step</button>
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
 

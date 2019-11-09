import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import {updateInfo} from '../../ducks/reducer'
import './Step3.css'



class Step3 extends Component {
  constructor(props) {
    super(props)

  this.addHouse = this.addHouse.bind(this)

  }

addHouse() {
  console.log(this.props)
  let {
    propName,
  address,
  city,
  state,
  zip,
  img,
  mortgage,
  rent} = this.props

  axios
    .post("/api/houses", {
      propName,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent
    })
    .then(() => console.log(this.props.history.push("/")))
    .catch(err => alert(err.response.data))
}

  render() { 
    return (
      <div>
        <div className='rr' >Recommended Rent: {this.props.mortgage * 1.25}</div>
        <div>Monthly Mortgage Amount</div>
        <input
          className="address"
          onChange={e => this.props.updateInfo(e.target)}
          name="mortgage"
          value={this.props.mortgage}
          type="text"
        />
        <div>Desired Monthly Rent</div>
        <input
          className="address"
          onChange={e => this.props.updateInfo(e.target)}
          name="rent"
          value={this.props.rent}
          type="text"
        />
        <div className="nav-box">
          <Link to="/wizard/step2">
            <button>Previous Step</button>
          </Link>

          <button onClick={this.addHouse}>Complete</button>
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
    zip: state.zip,
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent
  }
}
export default connect(mapStateToProps, {updateInfo})(Step3);
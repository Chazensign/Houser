import React, { Component } from "react"
import { Link } from "react-router-dom"
import House from "./House/House"
import { getHouses } from "../ducks/reducer"
import { connect } from "react-redux"
import "./Dashboard.css"

class Dashboard extends Component {
  render() {
    return (
        <div className="green-back">
      <div>
          <div className="dash-head">
            <div className='dash-button' >
            <div className='dash' >Dashboard</div>
            <Link to="/wizard/step1">
              <button className='add-prop' >Add New Property</button>
            </Link>
            </div>
            <div className='line' ></div>
          </div>

          <House />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  { getHouses }
)(Dashboard)

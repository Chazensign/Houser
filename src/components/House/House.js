import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { getHouses } from "../../ducks/reducer"
import './House.css'


class House extends Component {
  constructor() {
    super()
    this.deleteHouse = this.deleteHouse.bind(this)
  }
  componentDidMount() {
   axios.get("/api/houses").then(res => {
     this.props.getHouses(res.data)
   })
  }
  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`)
    .then(() => {
      this.componentDidMount()
    })
  }
  render() { 
    console.log(this.props.houses)
    return ( 
      <div className='all-houses'>
        { (this.props.houses.length > 0 ? this.props.houses.map(house => {
          return (
            <div className="outer-house" >
              <div className="img-box">
                <img src={house.img} alt="House" />
              </div>
              <div className='address-box'>
                <div>Property Name: {house.propName}</div>
                <div>Address: {house.address}</div>
                <div>City: {house.city}</div>
                <div>State: {house.state}</div>
                <div>Zip: {house.zip}</div>
              </div>
              <div>
                <div>Monthly Mortgage: {house.mortgage}</div>
                <div>Desired Rent: {house.rent}</div>
              </div>
              <button
                className="delete"
                onClick={() => this.deleteHouse(house.id)}
              >
                <img src="delete_button.png" alt="house" />
              </button>
            </div>
          )
        }): null )}
      </div>
     );
  }
}
const mapStateToProps = state => {
  return {
    houses: [...state.houses]
  }
}
 
export default connect(mapStateToProps, {getHouses})(House)



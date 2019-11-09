import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { getHouses } from "../../ducks/reducer"
import './House.css'
import del from './delete_button.png'


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
        <div className='home-list' >Home Listings</div>
        { (this.props.houses.length > 0 ? this.props.houses.map(house => {
          return (
            <div className="outer-house">
              <div className="img-box">
                <img className='house-pic' src={house.img} alt="House" />
              </div>
              <div className="address-box">
                <div>Property Name: {house.propName}</div>
                <div>Address: {house.address}</div>
                <div>City: {house.city}</div>
                <div>State: {house.state}</div>
                <div>Zip: {house.zip}</div>
              </div>
              <div className='mort-rent'>
                <div>Monthly Mortgage: {house.mortgage}</div>
                <div>Desired Rent: {house.rent}</div>
              </div>
              
                <img 
                className='del-img'
                  onClick={() => this.deleteHouse(house.id)}
                  src={del}
                  alt="house"
                />
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



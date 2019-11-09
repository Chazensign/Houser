import React, { Component } from 'react';
import {connect} from 'react-redux'

class Wizard extends Component {
  
  render() { 
    return (
      <div>
        Wizard
        <button>Cancel</button>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    propName: state.propName,
    address: state.address,
    city: state.city,
    state: state.city,
    zip: state.zip
  }
}
 
export default connect(mapStateToProps, ) (Wizard);
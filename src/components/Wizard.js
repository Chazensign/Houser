import React, { Component } from 'react';
import {connect} from 'react-redux'
import Routes2 from '../Routes2'
import {cancelAdd} from '../ducks/reducer'

class Wizard extends Component {
  
  render() { 
    return (
      <div>
        <button>Cancel</button>
        {Routes2}
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

// const mapStateToProps = state => {
//   return {
    
//   }
// }
 

export default connect(cancelAdd) (Wizard);
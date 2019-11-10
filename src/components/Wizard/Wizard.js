import React, { Component } from 'react';
import {connect} from 'react-redux'
import Routes2 from '../../Routes2'
import {cancelAdd} from '../../ducks/reducer'
import './Wizard.css'

class Wizard extends Component {
  
  render() { 
    return (
      <div className='green-back' >
        <div className='all-houses' >
          <div className='dash-button' >
            <h2 className='add-new-list' >Add New Listing</h2>
        <button 
          className='cancel-b'
          onClick={() => {
            this.props.cancelAdd()
            this.props.history.push("/")
          }} >Cancel</button>
        </div>
        {Routes2}
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {
    
  }
}

export default connect(mapStateToProps, {cancelAdd}) (Wizard);
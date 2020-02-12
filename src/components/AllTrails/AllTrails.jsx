import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class AllTrails extends Component {
  // Renders the entire app on the DOM

  handleClick = () => {
      axios.get('/alltrails').then(response => {
        console.log(response.data.data.alltrails.name);
        this.props.dispatch({type: 'GET_TRAILS', payload: response.data})
      }).catch(err => {
        console.log('error in handle click function', err)
      })
  }



  render() {
    return (
      <div className="App">
        <div>
          <p src={this.props.reduxStore.alltrails}></p>
        </div>
        <button onClick={this.handleClick}>GET TRAIL INFO</button>


        
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(AllTrails);
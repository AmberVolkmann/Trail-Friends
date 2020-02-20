import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { geolocated } from "react-geolocated";


class AddContribution extends Component {

    state= {
        newContribution:{
            createdBy: this.props.reduxStore.user.id,
            comment: '',
            trailId: this.props.reduxStore.user.current_trail,
            latitude: '',
            longitude: ''
        }

    }


    componentDidMount() {
        this.setUserLocation();
    }

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
            })
          }
        
        )}

    

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
          newContribution: {
              ...this.state.newContribution,
              latitude: this.state.latitude,
              longitude: this.state.longitude
            //   [propertyName]: event.target.value
          }  
        })
    }

    handleAddContribution = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_CONTRIBUTION',
            payload: this.state.newContribution
        })
    }

 
    render () {
        return (
            // !this.props.isGeolocationAvailable ? (
            //     <div>Your browser does not support Geolocation</div>
            // ) : !this.props.isGeolocationEnabled ? (
            //     <div>Geolocation is not enabled</div>
            // ) : this.props.coords ? (
            <Router>
                <form className="contributionForm" onSubmit={this.handleAddContribution}>
                    <label>Add a New Contribution</label>
                    <tr>
                        <td>Latitude:</td>
                        <td>{this.state.latitude}</td>
                    </tr>
                    <tr>
                        <td>Longitude:</td>
                        <td>{this.state.longitude}</td>
                    </tr>
                    <textarea value={this.state.comment} placeholder="Comment" onChange = {(event) => this.handleChangeFor('comment', event)} />
                    <br />
                    <input value={this.state.latitude} placeholder="latitude" onChange = {(event) => this.handleChangeFor('latitude', event)} />
                    <br />
                    <input value={this.state.longitude} placeholder="longitude" onChange = {(event) => this.handleChangeFor('longitude', event)} />
                    <br />
                    <input type= "submit" onClick = {this.handleAddContribution}/>
                </form>
            </Router>
        ) 
        // : <div>Getting the location data&hellip; </div>
        // );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(AddContribution)
geolocated({positionOptions:{enableHighAccuracy: false,}, userDecisionTimeout: 5000});
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { geolocated } from "react-geolocated";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './AddContribution.css';

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
                newContribution:
                {
                    ...this.state.newContribution,
                    comment: this.state.comment,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
          }
        
        )}

    

    handleChangeFor = (propertyName, event) => {
        console.log(`property name is ${propertyName}`);
        
        
        this.setState({
          newContribution: {
              ...this.state.newContribution,
            //   comment: this.state.comment,
            //   latitude: this.state.latitude,
            //   longitude: this.state.longitude
              [propertyName]: event.target.value
          }  
        })
        console.log(this.state);
        
    }

    handleAddContribution = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_CONTRIBUTION',
            payload: this.state.newContribution
        })
        alert('Your contribution has been added!')
    }

 
    render () {
        return (
            
            <Router>
                <form className="contributionForm" onSubmit={this.handleAddContribution}>
                    <label>Let someone know what's ahead of them!</label>
                    
                    
                    <textarea value={this.state.newContribution.comment} placeholder="Comment" onChange = {(event) => this.handleChangeFor('comment', event)} />
                    <br />
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                            {/* <InputGroup.Text>Lat and Lng</InputGroup.Text> */}
                        </InputGroup.Prepend>
                        <FormControl value={this.state.newContribution.latitude} placeholder="latitude" onChange = {(event) => this.handleChangeFor('latitude', event)}/>
                        <FormControl value={this.state.newContribution.longitude} placeholder="longitude" onChange = {(event) => this.handleChangeFor('longitude', event)} />
                    </InputGroup>
                    {/* <input  />
                    <br />
                    <input />
                    <br /> */}
                    <Button variant="success" onClick = {this.handleAddContribution}>Add</Button>
                </form>
            </Router>
        ) 
        
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(AddContribution)
geolocated({positionOptions:{enableHighAccuracy: false,}, userDecisionTimeout: 5000});
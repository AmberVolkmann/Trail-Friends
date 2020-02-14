import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, LoadScript } from 'google-maps-react';
import { withRouter } from 'react-router-dom';
import DroppedPin from '../DroppedPin/DroppedPin';
import UserLocation from '../UserLocation/UserLocation'


class UpdatedMap extends Component {

    state= {
        userLocation: 
        {latitude: 0, 
        longitude: 0}
    }

    componentDidMount() {
        this.getLocation();
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        userLocation: {
                            ...prevState.userLocation,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        }
                    }))
                }
            )
        } else {
            console.log('error in getGeoLocation function');
        }
    }

    getAllLocations = () => {
        this.props.dispatch({type: 'FETCH_LOCATIONS'});
        console.log(this.state)
    }


    render () {
        const {userLocation} = this.state

        // function getMap () {
        //     return (
        //         <GoogleMap defaultZoom={10} defaultCenter={{lat: 44.977489, lng: -93.264374}}/>
        //     )
        // }

        // const WrappedMap = withScriptjs(withGoogleMap(getMap));
        // const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        return (

            <Router>
                <div className="mapComponent">
                    <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyBMGVYY3hWxOnKawTM3ntOBzexZa1lGa_I"
                    >
                    <GoogleMap
                    className="mainMap"
                    style={{width: '100vw', height: '100vh'}}
                    zoom={10}
                    center={{
                        lat: 44.977489,
                        lng: -93.264374
                    }}
                    options={{
                        "mapTypeId": 'terrain',
                        "zoomControl": false,
                        "mapTypeControl": false,
                        "scaleControl": false,
                        "streetViewControl": false,
                        "rotateControl": false,
                        "fullscreenControl": false,
                        // styles:  mapStyles
                    }}
                    >
                        {/* UNCOMMENT THIS U MORON */}
                        {/* {this.props.reduxStore.locationsReducer.map(location => 
                            <DroppedPin key={location.id} location={location} />
                        )} */}
                        <UserLocation initialCenter={userLocation} />

                    </GoogleMap>

                    </LoadScript>

                </div>
            </Router>
        //     <div style={{width: '100vw', height: '100vh'}}>
        //     <WrappedMap  
        //     googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyBMGVYY3hWxOnKawTM3ntOBzexZa1lGa_I`}
        //     loadingElement={<div style={{height: "100%"}}/>}
        //     containerElement={<div style={{height: "100%"}}/>}
        //     mapElement={<div style={{height: "100%"}}/>}
        //     />
        // </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(UpdatedMap);
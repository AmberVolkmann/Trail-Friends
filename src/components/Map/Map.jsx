import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { withRouter } from 'react-router-dom';


class Map extends Component {


    // getMap = () => {
    //     return (
    //         <GoogleMap defaultZoom={10} defaultCenter={{lat: 44.977489, lng: -93.264374}}/>
    //     )
    // }


    render () {
        function getMap () {
            return (
                <GoogleMap defaultZoom={10} defaultCenter={{lat: 44.977489, lng: -93.264374}}/>
            )
        }

        const WrappedMap = withScriptjs(withGoogleMap(getMap));
        // const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        return (
            <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap  
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyBMGVYY3hWxOnKawTM3ntOBzexZa1lGa_I`}
            loadingElement={<div style={{height: "100%"}}/>}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Map);
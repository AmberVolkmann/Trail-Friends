import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, LoadScript, Marker } from 'react-google-maps';
import { withRouter } from 'react-router-dom';
import DroppedPin from '../DroppedPin/DroppedPin';
import UserLocation from '../UserLocation/UserLocation';
import * as trailData from '../trails.json';


function getMap() {
    
    return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 44.977489, lng: -93.264374}}
    >
    {trailData.trails.map()}
    </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(getMap));

export default function Map(key) {
   
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap  
            //maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}`}
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyBMGVYY3hWxOnKawTM3ntOBzexZa1lGa_I`}
            loadingElement={<div style={{height: "100%"}}/>}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}
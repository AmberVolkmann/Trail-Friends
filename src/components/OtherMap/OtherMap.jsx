import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, LoadScript, Marker, InfoWindow } from 'react-google-maps';
import { withRouter } from 'react-router-dom';
import DroppedPin from '../DroppedPin/DroppedPin';
import UserLocation from '../UserLocation/UserLocation';
import Markers from '../Markers/Markers';
import * as trailData from '../trails.json';


const Map = (props)=>{
    const [selectedTrail, setSelectedTrail] = useState(null);


    return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 44.977489, lng: -93.264374}}
    >
    {trailData.trails.map((trail) => (
        <Marker key={trail.id} 
        position={{lat: trail.latitude, 
                    lng: trail.longitude}}
        onClick={() => {
            setSelectedTrail(trail);
        }}
        />
    ))}

    {selectedTrail && (
        <InfoWindow
        position=
            {{lat: selectedTrail.latitude, 
            lng: selectedTrail.longitude}}
            onCloseClick={() => {
                setSelectedTrail(null);
            }}
            >
            <div>
                <div>
                    <img src={selectedTrail.imgSmall} />
                </div>
                <div>
                {/* <img src={selectedTrail.imgSqSmall} /> */}
                    <h2>{selectedTrail.name}</h2>
                    <p>{selectedTrail.summary}</p>
                </div>
            </div>
        </InfoWindow>
    )}
    <Marker lat={props.lat} lng={props.lng} />
    
    </GoogleMap>

    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
   
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
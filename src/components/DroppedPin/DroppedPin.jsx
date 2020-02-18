import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router, withRouter} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {
    Marker, InfoWindow, LoadScript, GoogleMap
} from 'google-maps-react';
// import {
//     Marker, InfoWindow
// } from '@react-google-maps/api';


class DroppedPin extends Component {

    state = {
        newPin: {
            createdBy: this.props.reduxStore.id,
            comment: '',
            dateSubmitted: '',
            trail_id: '',
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount() {
        // this.props.dispatch({ type: 'ADD_NEW_PIN', payload: this.props.history.location.pathname })
        // this.getGeoLocation();
    }

    addNewLocation = () => {
        // console.log('booyah')
        this.props.dispatch({ type: 'POST_LOCATIONS', payload: this.state.locationToAdd })
        this.props.history.push('/Map')
      } 

      setMarker = (e) => {

        this.setState({
          locationToAdd: {
            ...this.state.newPin,
            latitude: e.lat,
            longitude: e.lng
          }
        })
      }



    render () {
        return (
        <Router>
         <div className="droppedPin">
         <LoadScript
                id="script-loader"
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
              >
                <GoogleMap
                  className="mainMap"
                  mapContainerStyle={{
                    height: "50vh",
                    width: "auto"
                  }}
                  zoom={15}
                  center={{
                    lat: this.state.locationToAdd.latitude,
                    lng: this.state.locationToAdd.longitude,
                  }}
                  onClick={(e) => this.setMarker(e.latLng.toJSON())}
                  options={{
                    "zoomControl": false,
                    "mapTypeControl": false,
                    "scaleControl": false,
                    "streetViewControl": false,
                    "rotateControl": false,
                    "fullscreenControl": false,
                    
                  }}
                  >
                    <Marker
                      draggable
                      position={{
                        lat: this.state.locationToAdd.latitude,
                        lng: this.state.locationToAdd.longitude
                      }}
                      onDragEnd={(e) => this.setMarker(e.latLng.toJSON())}
                    />
                </GoogleMap>
              </LoadScript>
           </div>
        </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(DroppedPin));
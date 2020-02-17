import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReactMapGL , {Marker, GeolocateControl, NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types'

class Map extends Component {

    state = {
        viewport: {
          width: "100vw",
          height: "100vh",
          latitude: 0,
          longitude: 0,
          zoom: 1
        },
        hikingProjectTrails: [],
        userLocation: {}
    
      };

      componentDidMount() {
        // this.props.dispatch({
        //     type: 'FETCH_TRAILS'
        // }).then(trails => {
        //     this.setState({
        //         hikingProjectTrails: trails
        //     })
        // })
        
        fetch("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200677409-73ac38262c5f8297edc4c15be59aa795")
        .then(res => res.json())
        .then(trails => {
            this.setState({
                hikingProjectTrails: trails
            })
        })
        // const map = new mapboxgl.Map({
        //     container: this.mapRef.current,
        //     style: 'mapbox://styles/ambervolk/ck6pzq7a04fi91iqm15ir7sob',
        //     center: [lng, lat],
        //     zoom
      }


      setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
          let newViewport = {
              height: '100vh',
              width: '100vw',
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              zoom: 11
          }
          this.setState({
              viewport: newViewport,
              userLocation: this.setUserLocation
          })
        })
      }

    //   map.on('move', () => {
    //     const { lng, lat } = map.getCenter();

      loadTrailMarkers =() => {
          return this.state.hikingProjectTrails.map(item => {
              return (
                  <Marker
                  key={item.id}
                  latitude={parseFloat(item.latitude)}
                  longitude={parseFloat(item.longitude)}>
                      <img />
                  </Marker>
              )
          })
      }


    render() {
        return(
            <div className="mapPage">
                <button onClick={this.setUserLocation}>My Location</button>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                <div className="mapContainer">
                <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/ambervolk/ck6pzq7a04fi91iqm15ir7sob" 
                onViewportChange={(viewport => this.setState(viewport))}
                mapboxApiAccessToken='pk.eyJ1IjoiYW1iZXJ2b2xrIiwiYSI6ImNrNmkxd3VmeTFicnozbHFkYzc2cGxvZXcifQ.F21GiwG2VzyiqhfFcTmFjg'>
                {/* {Object.keys(this.state.userLocation).length !== 0 ? (
                    <Marker
                        latitude={this.state.userLocation.lat}
                        longitude={this.state.userLocation.long}
                    >
                    <img className="location-icon" src="public/location-pin-svgrepo-com.svg"/>
                    </Marker>
                ) : (<div></div>
                )} */}
                
                </ReactMapGL>
            </div>
        </div>
        )
    }
}
// mapboxgl.accessToken = 'pk.eyJ1IjoiYW1iZXJ2b2xrIiwiYSI6ImNrNmkxd3VmeTFicnozbHFkYzc2cGxvZXcifQ.F21GiwG2VzyiqhfFcTmFjg'

// let Map = class Map extends Component {
//     mapRef = React.createRef();
//     map;

//     state = {
//         viewport: {
//         //   width: "100vw",
//         //   height: "100vh",
//           latitude: 0,
//           longitude: 0,
//           zoom: 5
//         },
//         hikingProjectTrails: [],
//         userLocation: {}
    
//       };
  
//     static propTypes = {
//       data: PropTypes.object.isRequired,
//       active: PropTypes.object.isRequired
//     };


  
//     // componentDidUpdate() {
//     // //   this.setFill();
//     // }
  
//     componentDidMount() {
//       this.map = new mapboxgl.Map({
//         container: this.mapRef.current,
//         style: 'mapbox://styles/ambervolk/ck6pzq7a04fi91iqm15ir7sob',
//         center: [5, 34],
//         zoom: 1.5
//       });
  
//       this.map.on('load', () => {
//         this.map.addSource('countries', {
//           type: 'geojson',
//           data: this.props.data
//         });
  
//         // this.map.addLayer({
//         //   id: 'countries',
//         //   type: 'fill',
//         //   source: 'countries'
//         // }, 'country-label-lg'); // ID metches `mapbox/streets-v9`
  
//         // this.setFill();
//       });
//     }
  
//     // setFill() {
//     //   const { property, stops } = this.props.active;
//     //   this.map.setPaintProperty('countries', 'fill-color', {
//     //     property,
//     //     stops
//     //   });    
//     // }

//         setUserLocation = () => {
//         navigator.geolocation.getCurrentPosition(position => {
//           let newViewport = {
//             //   height: '100vh',
//             //   width: '100vw',
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//               zoom: 11
//           }
//           this.setState({
//               viewport: newViewport,
//               userLocation: this.setUserLocation
//           })
//         })
//       }
  
//     render() {
//       return (
//           <Router>
//               <button onClick={this.setUserLocation}>My Location</button>
//               <div ref={this.mapRef} className="absolute top right left bottom">
//                  {Object.keys(this.state.userLocation).length !== 0 ? (
//                     <Marker
//                         latitude={this.state.userLocation.lat}
//                         longitude={this.state.userLocation.long}
//                     >
//                     <img className="location-icon" src="public/location-pin-svgrepo-com.svg"/>
//                     </Marker>
//                     ) : (<div></div>
//                  )}
//                 </div>
//           </Router>
        
        
//       );
//     }
//   }
  
//   function mapStateToProps(state) {
//     return {
//       data: state.data,
//       active: state.active
//     };
//   }

//   Map = connect(mapStateToProps)(Map);
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(Map));
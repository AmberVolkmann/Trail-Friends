import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    Marker, InfoWindow
} from 'google-maps-react';


class UserLocation extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Marker
                    position={{
                        lat: this.props.initialCenter.latitude,
                        lng: this.props.initialCenter.longitude
                    }}
                    onCloseClick={{}} />
                    {/* icon={currentLocation} /> */}
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(UserLocation);
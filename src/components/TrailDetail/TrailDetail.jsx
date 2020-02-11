import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';



class TrailDetail extends Component {
    render () {
        return (
            <>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(TrailDetail);
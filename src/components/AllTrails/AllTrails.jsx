import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Trail from '../Trail/Trail';
// import Map from '../Map/Map';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


class AllTrails extends Component {

  // state = { expanded: false };

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_TRAILS'
        })
        
    }


  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <div className="trailList">
          {this.props.reduxStore.trailReducer.map(trail => {
            return (
              <Trail trail={trail} id={trail.id} key={trail.id} />
            )
          })}
          {/* <Map trails={this.props.reduxStore.trails} id={this.props.reduxStore.id} key={this.props.reduxStore.id} 
          latitude={this.props.reduxStore.latitude}
          /> */}
        </div>
      </Router>
      
    )
  }
}

// AllTrails.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(AllTrails);
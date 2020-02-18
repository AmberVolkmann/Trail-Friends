import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Contribution from '../Contribution/Contribution';
// import Map from '../Map/Map';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


class AllContributions extends Component {

  // state = { expanded: false };

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CONTRIBUTIONS'
        })
        
    }


  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <div className="contributionList">
            
          {this.props.reduxStore.contributionReducer.map(contribution => {
            return (
              <Contribution contribution={contribution} id={contribution.id} key={contribution.id} />
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

export default connect(mapStateToProps)(AllContributions);
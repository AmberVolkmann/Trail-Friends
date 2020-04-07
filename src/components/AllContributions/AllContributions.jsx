import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Contribution from '../Contribution/Contribution';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './AllContributions'
// import Map from '../Map/Map';
import CardDeck from 'react-bootstrap/CardDeck';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


class AllContributions extends Component {

  // state = { expanded: false };

  state = {
    spacing: '16',
  };

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CONTRIBUTIONS'
        })
        
    }


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;


    return (
      <Router>
        <div className="allContributions">
                {this.props.reduxStore.contributionReducer.map(contribution => {
                    return (
                    <CardDeck className="align-self-center mr-3">
                      <Contribution contribution={contribution} id={contribution.id} key={contribution.id} />
                    </CardDeck>
                    )
                    })}
        </div>
      </Router>
      
    )
  }
}

// AllTrails.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

AllContributions.propTypes = {
    classes: PropTypes.object.isRequired,
  };


const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(AllContributions));
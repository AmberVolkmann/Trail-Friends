import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Contribution from '../Contribution/Contribution';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './AllContributions'
// import Map from '../Map/Map';


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
        {/* <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12} sm container>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    {[0, 1, 2].map(value => (
                    <Grid key={value} item> */}
                    
                {this.props.reduxStore.contributionReducer.map(contribution => {
                    return (
                    <Contribution contribution={contribution} id={contribution.id} key={contribution.id} />
                    )
                    })}
                    {/* </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
          <Map trails={this.props.reduxStore.trails} id={this.props.reduxStore.id} key={this.props.reduxStore.id} 
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

AllContributions.propTypes = {
    classes: PropTypes.object.isRequired,
  };


const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(AllContributions));
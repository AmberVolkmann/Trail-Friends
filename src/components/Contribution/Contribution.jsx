import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class Contribution extends Component {

    deleteContribution = (event, propertyName) => {
        console.log('deleteContribution', this.props.id)
        
        this.props.dispatch({
            type: 'DELETE_CONTRIBUTION',
            payload: this.props.contribution.id
        })
    }



    render() {
      const { classes } = this.props;
      
      const bull = <span className={classes.bullet}>•</span>;
  
      return (
      <Router>
        <div>
            <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.contribution.date_submitted}
            </Typography>
            <Typography variant="h5" component="h2">
            {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {/* {this.props.contribution.created_by} */}
            </Typography>
            <Typography variant="body2" component="p">
            {this.props.contribution.comment}
            <br />
            {/* {'"a benevolent smile"'} */}
            </Typography>
        </CardContent>
        <CardActions>
            {this.props.reduxStore.user.id === contribution.submitted_by ? 
            <IconButton aria-label="Add to favorites" onClick={() => this.props.dispatch(
                {type: 'DELETE_CONTRIBUTION',
                payload: this.props.contribution.id})}>
                <DeleteIcon />
            </IconButton> :
            <p></p>
            }
        </CardActions>
        </Card>
                  
  
            
        </div>
        </Router>
        
      )
    }
  }
  
  Contribution.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  
  const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
  
  export default connect(mapStateToProps) (withStyles(styles)(Contribution));
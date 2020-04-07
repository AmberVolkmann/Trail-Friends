import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Contribution.css'
const moment = require('moment');

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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{moment(this.props.contribution.date_submitted).format('LL')}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.contribution.latitude}
                      <br />
                      {this.props.contribution.longitude}</Card.Subtitle>
              <Card.Text className="text-center">
              {this.props.contribution.comment}
              </Card.Text>
              {this.props.reduxStore.user.id === this.props.contribution.created_by ? 
                <Button variant="outline-danger" onClick={() => this.props.dispatch(
                  {type: 'DELETE_CONTRIBUTION',
                  payload: this.props.contribution.id})} block>Delete</Button> :
                <p></p> }
              {/* <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
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


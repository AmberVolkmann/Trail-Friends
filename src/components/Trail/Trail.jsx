import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Trail extends Component {

  state = { 
      expanded: false,
      updatedTrail: 
        this.props.id
      
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

    // handleTrailChange = () => {
    //     console.log('handle trail change clicked', this.props.id)
    // }

    updateCurrentTrail = (event, propertyName) => {
        console.log('handle trail change clicked', this.props.id)
        this.setState({
            updatedTrail:{
                ...this.state.updatedTrail,
                [propertyName]: event.target.value,
            }
        })
        console.log('this.state.updatedTrail.id', this.state.updatedTrail.id)
        this.props.dispatch({
            type: 'UPDATE_CURRENT_TRAIL',
            payload: this.state.updatedTrail
        })
        alert('You are now changing trails!')
    }


  render() {
    const { classes } = this.props;


    return (
    <Router>
      <div>
            <Card className={classes.card}>
                    <CardHeader
                      action={
                        <IconButton>
                          {/* <MoreVertIcon /> */}
                        </IconButton>
                      }
                      title={this.props.trail.name}
                      
                    />
                    <CardMedia
                      className={classes.media}
                      image={this.props.trail.imgMedium}
                      title="Trail Image"
                    />
                    <CardContent>
                      <Typography component="p">
                        {this.props.trail.summary}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                    <Button size="small" color="primary" onClick={this.updateCurrentTrail} value={this.state.updatedTrail}>
                      Select Trail
                    </Button>
                      {/* <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton> */}
                      {/* <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton> */}
                      <IconButton
                        className={classnames(classes.expand, {
                          [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h6">Details</Typography>
                        <Typography variant="subtitle1">Length:</Typography>
                        <Typography paragraph>
                          {this.props.trail.length} miles
                        </Typography>
                        <Typography variant="subtitle1">Ascent:</Typography>
                        <Typography paragraph>
                          {this.props.trail.ascent}
                        </Typography>
                        <Typography variant="subtitle1">Descent:</Typography>
                        <Typography paragraph>
                          {this.props.trail.descent} 
                        </Typography>
                        <Typography variant="subtitle1">Condition:</Typography>
                        <Typography paragraph>
                          {this.props.trail.conditionDetails}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
            
                

          
      </div>
      </Router>
      
    )
  }
}

Trail.propTypes = {
  classes: PropTypes.object.isRequired,
};



const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps) (withStyles(styles)(Trail));
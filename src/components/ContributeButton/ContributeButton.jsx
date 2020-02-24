import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class ContributeButton extends Component {
  
    handleClick = () => {
        this.props.history.push(`/addcontribution`)
    }

  render() {
    
    return (
        <Router>
            <div>
                <Button variant="success" size="lg" onClick={this.handleClick} block>Add a New Contribution</Button>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(ContributeButton));
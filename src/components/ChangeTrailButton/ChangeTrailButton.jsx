import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class ChangeTrailButton extends Component {
  
    handleClick = () => {
        this.props.history.push(`/alltrails`)
    }

  render() {
    
    return (
        <Router>
            <div>
                <Button variant="outline-success" onClick={this.handleClick} size="lg" block>Change Current Trail</Button>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(ChangeTrailButton));
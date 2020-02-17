import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';


class ContributeButton extends Component {
  
    handleClick = () => {
        this.props.history.push(`/addcontribution`)
    }

  render() {
    
    return (
        <Router>
            <div>
                <button onClick={this.handleClick}>Add a New Contribution</button>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(ContributeButton));
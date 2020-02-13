import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class ChangeTrailButton extends Component {
  
    handleClick = () => {
        this.props.history.push(`/alltrails`)
    }

  render() {
    
    return (
        <Router>
            <div>
                <button onClick={this.handleClick}>Change Current Trail</button>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(ChangeTrailButton);
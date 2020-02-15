import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';



class TrailDetail extends Component {
    render () {
        return (
            <div
        className="trail-item"
        onClick={evt => {
          this.props.onClick(evt, this.props.trail);
        }}
      >
        <div className="trail-img">
          <img src={this.props.checkTrailImage(this.props.trail)} alt={this.props.trail.name} title={this.props.trail.name}/>
        </div>
        <div className="trail-details">
          <h3 title={this.props.trail.name} tabIndex="0">
            {this.props.trail.name}
          </h3>
          <p>
            Length: {this.props.trail.length} miles <br />
            Difficulty: {this.props.checkDifficulty(this.props.trail)}
          </p>
          <p>{this.props.trail.summary}</p>

          
        </div>
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(TrailDetail);
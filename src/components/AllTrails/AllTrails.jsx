import React, { Component } from 'react';
import {connect} from 'react-redux';

class AllTrails extends Component {
  

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_TRAILS'
        })
        
    }


  render() {
    
    return (
      <div>
        
            {/* {props.reduxStore.trailReducer.map((trails) => 
            <li key={trails.id}> {JSON.stringify({trails})} </li>    
            )} 
            <li src={this.props.reduxStore.trails}></li> 
            <img src={props.reduxStore.trails} alt="picture of trails"/> 
             {this.props.reduxStore.trailReducer.map((trails) => 
            <li key={trails.id}>{this.props.reduxStore.trailReducer.trails.name}</li>
            )}  */}
            {this.props.reduxStore.trailReducer.map(trail =>
            <li key={trail.id}>
              <div>
                <p>{trail.name}</p>
                <p>{trail.summary}</p>
                 <img src={trail.url} /> 
                
              </div>
            </li>
          )}
        
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(AllTrails);
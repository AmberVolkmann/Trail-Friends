import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';



class AddContribution extends Component {

    state= {
        newContribution:{
            createdBy: this.props.reduxStore.id,
            comment: '',
            dateSubmitted: null,
            trailId: this.props.reduxStore.current_trail,
            latitude: '',
            longitude: ''
        }
    }

    

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
          newContribution: {
              ...this.state.newContribution,
              [propertyName]: event.target.value
          }  
        })
    }

    handleAddContribution = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'POST_CONTRIBUTION',
            payload: this.state.newContribution
        })
    }

    newDate = () => {

    }

    render () {
        return (
            <Router>
                <form className="contributionForm" onSubmit={this.handleAddContribution}>
                    <label>Add a New Contribution</label>
                    <textarea value={this.state.comment} onChange = {(event) => this.handleChangeFor('comment', event)} />
                    <br />
                    <input value={this.state.latitude} onChange = {(event) => this.handleChangeFor('latitude', event)} />
                    <br />
                    <input value={this.state.longitude} onChange = {(event) => this.handleChangeFor('longitude', event)} />
                    <input type= "submit" onClick = {this.handleAddContribution}/>
                </form>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(AddContribution);
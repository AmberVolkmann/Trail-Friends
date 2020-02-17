import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  HashRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';



class AddContribution extends Component {

    state= {
        newContribution:{
            createdBy: '',
            comment: '',
            dateSubmitted: '',
            trailId: '',
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

    render () {
        return (
            <Router>
                <form className="contributionForm" onSubmit={this.handleAddContribution}>
                    <label>Add a New Contribution</label>
                    <textarea value={this.state.comment} onChange = {(event) => this.handleChangeFor('comment', event)} />
                    {/* <input value={this.state.comment} onChange = {(event) => this.handleChangeFor('comment', event)} /> */}
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
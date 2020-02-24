import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import ChangeTrailButton from '../ChangeTrailButton/ChangeTrailButton';
import ContributeButton from '../ContributeButton/ContributeButton';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="containter">
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <div className="imageDiv" style={{
    justifyContent: 'center',
    alignItems: 'center',
    }} >
      <img className="profilePic" />  
      {/* src={props.user.profile_picture}  */}
       {/* alt="user's image"/> */}
    </div>
    <p>Current Trail: {props.user.current_trail}</p>
    <ChangeTrailButton />
    <br />
    <ContributeButton />
    {/* <p>Your ID is: {props.user.id}</p> */}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);


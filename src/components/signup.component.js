import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as firebase from "firebase/app";
import { auth } from "../firebase";

export default class SignUp extends Component {
  render() {
    console.log(auth);
=======
import "firebase/auth";
import { db } from "firebase";
//firebase.initializeApp();

// import { alert } from "react-alert";

// Add the Firebase services that you want to use
//import firebase from "firebase/app";

//import "firebase/firestore";
export default class SignUp extends Component {
  render() {
    const signUp = db
      .auth()
      .createUserWithEmailAndPassword(
        document.getElementById("email"),
        document.getElementById("password")
      )
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert(errorMessage);
      });

>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
<<<<<<< HEAD
        <Link to={{ pathname: "/temperature-history" }} >
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={() =>{
            console.log( document.getElementById("email").value)
            auth
              .createUserWithEmailAndPassword(
                document.getElementById("email").value,
                document.getElementById("password").value
              )
              .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                 alert(errorMessage);
              })
              .then(() => <Link to={{ pathname: "/temperature-history" }} />)
            }
          }
        >
          Sign Up
        </button>
        </Link>
=======

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={signUp}
        >
          Sign Up
        </button>
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
<<<<<<< HEAD
=======
// const firebaseConfig = {
//   apiKey: "AIzaSyBUqz1ZnV2k8gWJP3KRVgtRTfGZ80ZJzd8",
//   authDomain: "covid-track-thy-honor.firebaseapp.com",
//   databaseURL: "https://covid-track-thy-honor.firebaseio.com",
//   projectId: "covid-track-thy-honor",
//   storageBucket: "covid-track-thy-honor.appspot.com",
//   messagingSenderId: "298587018675",
//   appId: "1:298587018675:web:f0d3ed9427a7aa778c27c6",
//   measurementId: "G-0DDC2WGGM3",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
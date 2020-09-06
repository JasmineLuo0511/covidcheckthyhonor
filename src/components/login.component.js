import React, { Component } from "react";
import { db } from "firebase";
import "firebase/auth";
//import firebase from "firebase/app";
//import "firebase/firestore";

export default class Login extends Component {
  render() {
    console.log(db);
    const logIn = db
      .auth()
      .signInWithEmailAndPassword(
        document.getElementById("email"),
        document.getElementById("password")
      )
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert(errorMessage);
      });
    return (
      <form>
        <h3>Sign In</h3>

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
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={logIn}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}

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

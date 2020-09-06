import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as firebase from "firebase/app";
import { auth } from "../firebase";

export default class SignUp extends Component {
  render() {
    console.log(auth);
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
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}

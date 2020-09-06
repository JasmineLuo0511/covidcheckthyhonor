import React from "react";
<<<<<<< HEAD
import routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

=======
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
<<<<<<< HEAD
=======
            <Link className="navbar-brand" to={"/sign-in"}>
              positronX.io
            </Link>
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
<<<<<<< HEAD
          <div>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  }}
                />
              );
            })}
          </div>
=======
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
        </div>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
// export default () => (
//   <Router basename={process.env.REACT_APP_BASENAME || ""}>
//     <div>
//       {routes.map((route, index) => {
//         return (
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={props => {
//               return (
//                 <route.layout {...props}>
//                   <route.component {...props} />
//                 </route.layout>
//               );
//             }}
//           />
//         );
//       })}
//     </div>
//   </Router>
// );

=======
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
export default App;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

import Home from "../routes/Home";
import Login from "../routes/Login";
import Header from "./Header/Header";
import System from "../routes/System";
import HomePage from "./HomePage/HomePage";

import DetailDoctor from "./Patient/Doctor/DetailDoctor";

import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";

import CustomScrollbars from "../components/CustomScrollbars";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <ConfirmModal /> {this.props.isLoggedIn && <Header />}{" "}
            <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
              <div className="content-container">
                <Switch>
                  <Route path={path.HOME} exact component={Home} />{" "}
                  <Route path={path.HOMEPAGE} component={HomePage} />{" "}
                  <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />{" "}
                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />{" "}
                  <Route
                    path={path.SYSTEM}
                    component={userIsAuthenticated(System)}
                  />{" "}
                </Switch>{" "}
              </div>{" "}
            </CustomScrollbars>{" "}
            {/* <ToastContainer                                                                                                                                                                                                                                                                                                                                              /> */}{" "}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>{" "}
        </Router>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
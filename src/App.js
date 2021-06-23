import { Component } from "react";
import Nav from "./conponents/Nav/Nav.jsx";
import DialogContaner from "./conponents/Dialogs/Message/DialogContaner.jsx";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import UsersContaner from "./conponents/Users/UsersContaner";
import ProfileContaner from "./conponents/Profile/ProfileContaner";
import HeaderContaner from "./conponents/Header/HeaderContaner";
import Login from "./Login/login";
import { connect } from "react-redux";
import { initializedPageApp } from "./redux/authApp";
import { compose } from "redux";
import Preloader from "./conponents/common/Prealoader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializedPageApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContaner />
        <Nav />
        <Route path="/dialog" render={() => <DialogContaner />} />
        <Route path="/profile/:userid?" render={() => <ProfileContaner />} />
        <Route path="/users" render={() => <UsersContaner />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.authPageApp.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedPageApp })
)(App);

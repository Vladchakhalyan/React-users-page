import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const WithAuthRedirect = (Component) => {
  let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
  });

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};

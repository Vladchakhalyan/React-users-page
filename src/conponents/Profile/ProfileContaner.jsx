import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  updateStatus,
  VUprofile,
} from "../../redux/DialogPageRedux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../hoc/AuthRedirect";

class ProfileContaner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userid;
    if (!userId) {
      userId = 17545;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.VUprofile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.myPage.profile,
  status: state.myPage.status,
  usId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { VUprofile, getStatus, updateStatus }),
  WithAuthRedirect,
  withRouter
)(ProfileContaner);

import { connect } from "react-redux";
import {
  folow,
  getPageUsers,
  isFLUN,
  SetUserCh,
  unfolow,
  Usersfolow,
  Usersunfolow,
} from "../../redux/UsersRedux";
import React from "react";
import Users from "./Users";
import Preloader from "../../conponents/common/Prealoader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getUsers,
  getUsersTotalCount,
} from "../../redux/Users-selector";

class UsersContaner extends React.Component {
  componentDidMount() {
    this.props.getPageUsers(this.props.CurrentPage, this.props.mklient);
  }
  onPageChanged = (usermk) => {
    this.props.getPageUsers(usermk, this.props.mklient);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getUsersTotalCount(state),
    CurrentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    nkisFLUN: getFollowingProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    folow,
    unfolow,
    SetUserCh,
    isFLUN,
    getPageUsers,
    Usersunfolow,
    Usersfolow,
  })
  // WithAuthRedirect
)(UsersContaner);

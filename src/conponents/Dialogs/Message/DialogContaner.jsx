import { dialogMsg } from "../../../redux/DialogPageRedux.js";
import Dialog from "../Dialog";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    person: state.myPage.person,
    messages: state.myPage.messages,
    newmsg: state.myPage.newmsg,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    AddF: (text) => {
      dispatch(dialogMsg(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialog);

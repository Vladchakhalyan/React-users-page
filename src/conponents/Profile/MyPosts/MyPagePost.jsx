import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/ProfileRedux.js";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    mymsg: state.messagePage.mymsg,
    adText: state.messagePage.adText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => {
      dispatch(addPost(text));
    },
  };
};

const MyPagePost = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPagePost;

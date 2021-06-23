import { authApi } from "../API/api";
import { stopSubmit } from "redux-form";

const A_TH = "A_TH";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authPage = (state = initialState, action) => {
  switch (action.type) {
    case A_TH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const ath = (id, email, login, isAuth) => ({
  type: A_TH,
  data: { id, email, login, isAuth },
});

export const VUheader = () => (dispatch) => {
  return authApi.getUsers4().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(ath(id, email, login, true));
    }
  });
};
export const authLoginPAge = (email, password, rememberMe) => (dispatch) => {
  authApi.authLogin(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(VUheader());
    } else {
      let msg = data.messages.length > 0 ? data.messages[0] : "some error";
      dispatch(stopSubmit("login", { _error: msg }));
    }
  });
};

export const Loginauth = () => (dispatch) => {
  authApi.authLoginDelet().then((data) => {
    if (data.resultCode === 0) {
      dispatch(ath(null, null, null, false));
    }
  });
};

export default authPage;

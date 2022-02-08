import { loginApi } from '../API/api';

const L_G = 'L_G';

let initialState = {
  Login: null,
};

const loginform = (state = initialState, action) => {
  switch (action.type) {
    case L_G:
      return { ...state, Login: action.Login };
    default:
      return state;
  }
};

export const lg = (Login) => ({
  type: L_G,
  Login,
});

export const PostLogin = (Login) => (dispatch) => {
  loginApi.getUserLogin(Login).then((response) => {
    dispatch(lg(response.data));
  });
};

export default loginform;

import { VUheader } from "./authPage";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const authPageApp = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
export const initializedPage = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializedPageApp = () => (dispatch) => {
  let promise = dispatch(VUheader());

  Promise.all([promise]).then(() => {
    dispatch(initializedPage());
  });
};

export default authPageApp;

import { profileApi } from "../API/api";

const DIALOG_MSG = "DIALOG_MSG";
const USER_PROFILE_PAGE = "USER_PROFIL_PAGE";
const CHANGE_STATUS = "CHANGE_STATUS";

let initialState = {
  person: [
    { name: "Sasha", id: "1" },
    { name: "Artyom", id: "2" },
    { name: "Viktoria", id: "3" },
    { name: "Ann", id: "4" },
    { name: "Maria", id: "5" },
  ],
  messages: [{ msg: "Hi" }, { msg: "How old are you?" }, { msg: "I am 19" }],
  profile: null,
  status: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_MSG: {
      let body = action.text;
      return { ...state, messages: [...state.messages, { msg: body }] };
    }
    case USER_PROFILE_PAGE:
      return { ...state, profile: action.profile };
    case CHANGE_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const dialogMsg = (text) => ({
  type: DIALOG_MSG,
  text,
});

export const userPage = (profile) => ({
  type: USER_PROFILE_PAGE,
  profile,
});

export const ChangeStatus = (status) => ({
  type: CHANGE_STATUS,
  status,
});

export const VUprofile = (userid) => {
  return (dispatch) => {
    profileApi.getUsers5(userid).then((data) => {
      dispatch(userPage(data));
    });
  };
};

export const getStatus = (userid) => (dispatch) => {
  profileApi.getStatus(userid).then((response) => {
    dispatch(ChangeStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileApi.statusUpdate(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(ChangeStatus(status));
    }
  });
};

export default dialogReducer;

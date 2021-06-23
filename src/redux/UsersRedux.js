import { UsersApi } from "../API/api";

const FOLOW = "FOLOW";
const UNFOLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_CH = "SET_USERS_CH";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_FETCHING = "IS_FETCHING";
const IS_TOGGLE_FLUN = "IS_TOGGLE_FLUN";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  toggleFLUN: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLOW: {
      return {
        ...state,
        users: state.users.map((dd) => {
          if (dd.id === action.usersID) {
            return { ...dd, followed: true };
          }
          return dd;
        }),
      };
    }
    case UNFOLOW: {
      return {
        ...state,
        users: state.users.map((ddd) => {
          if (ddd.id === action.usersID) {
            return { ...ddd, followed: false };
          }
          return ddd;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_USERS_CH: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isfch };
    }
    case IS_TOGGLE_FLUN: {
      return {
        ...state,
        toggleFLUN: action.isFetching
          ? [...state.toggleFLUN, action.userId]
          : state.toggleFLUN.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const folow = (usersID) => ({ type: FOLOW, usersID });
export const unfolow = (usersID) => ({ type: UNFOLOW, usersID });
export const setusers = (users) => ({ type: SET_USERS, users });
export const SetUserCh = (currentPage) => ({ type: SET_USERS_CH, currentPage });
export const setTotalUserCount = (totalUsersCountt) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCountt,
});
export const isFetchings = (isfch) => ({ type: IS_FETCHING, isfch });
export const isFLUN = (isFetching, userId) => ({
  type: IS_TOGGLE_FLUN,
  isFetching,
  userId,
});

export const getPageUsers = (page, mklient) => {
  return (dispatch) => {
    dispatch(isFetchings(true));
    dispatch(SetUserCh(page));
    UsersApi.getUsers(page, mklient).then((data) => {
      dispatch(isFetchings(false));
      dispatch(setusers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
    });
  };
};

export const Usersunfolow = (id) => {
  return (dispatch) => {
    UsersApi.getUsers2(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfolow(id));
      }
      dispatch(isFLUN(false, id));
    });
  };
};

export const Usersfolow = (id) => {
  return (dispatch) => {
    UsersApi.getUsers3(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(folow(id));
      }
      dispatch(isFLUN(false, id));
    });
  };
};

export default usersReducer;

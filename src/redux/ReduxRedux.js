import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReducer from "./DialogPageRedux";
import messageReducer from "./ProfileRedux";
import usersReducer from "./UsersRedux";
import authPage from "./authPage";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import authPageApp from "./authApp";

let reducers = combineReducers({
  myPage: dialogReducer,
  messagePage: messageReducer,
  usersReducer: usersReducer,
  auth: authPage,
  authPageApp: authPageApp,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

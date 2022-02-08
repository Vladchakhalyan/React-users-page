import dialogReducer, { dialogMsg } from "./DialogPageRedux";

it("new post", () => {
  //1.Start data
  let initialState = {
    messages: [{ msg: "Hi" }, { msg: "How old are you?" }, { msg: "I am 19" }],
  };
  let action = dialogMsg("hello");

  //action
  let newState = dialogReducer({}, action);

  //expectation
  newState.messages.length()
});

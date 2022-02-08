import messageReducer, { addPost } from "./ProfileRedux";
import avatarka from "../image/down2.jpg";

it("new post", () => {
  //1.Start data
  let state = {
    mymsg: [
      { img: avatarka, like: "like", msg: "HI", id: 1 },
      { img: avatarka, like: "like", msg: "there is nothing?", id: 2 },
    ],
  };
  let action = addPost("hello");

  //action
  let newState = messageReducer(state, action);

  //expectation
  expect(newState.mymsg.length).toBe(3);
});

it("message of new post should be correct", () => {
  //1.Start data
  let state = {
    mymsg: [
      { img: avatarka, like: "like", msg: "HI", id: 1 },
      { img: avatarka, like: "like", msg: "there is nothing?", id: 2 },
    ],
  };
  let action = addPost("hello");

  //action
  let newState = messageReducer(state, action);

  //expectation

  expect(newState.mymsg[2].msg).toBe("hello");
});

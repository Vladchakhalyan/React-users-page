import avatarka from "../image/down2.jpg";

let initialState = {
  mymsg: [
    { img: avatarka, like: "like", msg: "HI", id: 1 },
    { img: avatarka, like: "like", msg: "there is nothing?", id: 2 },
  ],
};

const ADD_POST = "ADD_POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let body = action.text;
      return {
        ...state,
        mymsg: [
          ...state.mymsg,
          { id: 2, msg: body, img: avatarka, like: "like" },
        ],
      };
    }
    // case UPDATE_NEW_POST_TEXT: {
    //   return { ...state, adText: action.newText };
    // }
    default:
      return state;
  }
};

export const addPost = (text) => ({
  type: ADD_POST,
  text,
});

export default messageReducer;

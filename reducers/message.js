import { SET_MESSAGE } from "../types/message";
const initState = {
  message: ""
};
export default (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      console.log(' this is a reducer ', action.payload.message);
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

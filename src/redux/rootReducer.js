import {DECREMENT, INCREMENT, INIT} from "./types";

export const rootReducer = (state, action) => {
  switch(action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    case INIT: return 22;
    default: return state;
  }
};


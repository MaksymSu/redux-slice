import {createSlice} from "@reduxjs/toolkit"


//Слайс - это по сути обьект с готовым редьюсером, который сделан без констант. Можно удалять rootReducer, actions и types

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 22,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state -1;
    },
    init(state) {
      return state;
    }
  }
});

export const {increment, decrement, init} = counterSlice.actions;
//export default counterSlice.reducer

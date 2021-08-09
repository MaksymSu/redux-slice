import './styles.css'

import {createStore, applyMiddleware} from "redux";
//import {INCREMENT} from "./redux/types";

import {logger} from "redux-logger";
//import {rootReducer} from "./redux/rootReducer";
//import {decrement, increment, init} from "./redux/actions";
//import {increment, decrement, reducer} from "./redux/slice";


import {counterSlice} from "./redux/slice";


const store = createStore(
  counterSlice.reducer,
  applyMiddleware(logger)
);





document.getElementById('add').addEventListener('click',
  () => store.dispatch(counterSlice.actions.increment())
);

document.getElementById('sub').addEventListener('click',
  () => store.dispatch(counterSlice.actions.decrement())
);

function render() {
 document.getElementById('counter').textContent = store.getState();
}

store.subscribe(render);

store.dispatch(counterSlice.actions.init());

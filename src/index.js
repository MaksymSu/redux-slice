import './styles.css'

import {createStore, applyMiddleware} from "redux";
import {INCREMENT} from "./redux/types";

import {logger} from "redux-logger";
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment} from "./redux/actions";


const store = createStore(
  rootReducer,
  0,
  applyMiddleware(logger)
);




document.getElementById('add').addEventListener('click',
  () => store.dispatch(increment())
);

document.getElementById('sub').addEventListener('click',
  () => store.dispatch(decrement())
);

function render() {
 document.getElementById('counter').textContent = store.getState();
}

store.subscribe(render);
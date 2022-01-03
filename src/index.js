import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import rootReducer from "./reducers/index"
import { Provider } from "react-redux"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



// // STORE (Globalized State)

// // ACTION (Describes what you want to do) (function that returns an object) -> Increment
// const increment = () => {
//   return {
//     type: "INCREMENT" // type is like the action name
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT" // type is like the action name
//   }
// }


// // REDUCER (Describes how your actions transform the state into the next state)
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT': 
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }


// let store = createStore(counter);

// // Display it in the console
// store.subscribe(()=>console.log(store.getState()));


// // DISPATCH (Execute the action (Dispatch this action to the reducer)) 
// store.dispatch(increment()); // using increment and sending to the reducer case type will return a state


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

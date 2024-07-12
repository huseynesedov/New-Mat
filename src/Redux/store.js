// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import {thunk} from "redux-thunk";
// import {
//   userReducer,
//   loaderReducer,
//   notificationReducer,
//   catReducer,
//   edit,
// } from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   user: userReducer,
//   loader: loaderReducer,
//   cats: catReducer,
//   edit:edit,
//   notification: notificationReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;




// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

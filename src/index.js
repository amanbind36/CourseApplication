// import React from 'react';
// import ReactDOM from "react-dom";

// import './index.css';
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "../src/components/reducers";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// const store = createStore(rootReducer);
// const root = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(root);
// reactRoot.render(<App />);
// ReactDOM.render(

//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// const root = document.getElementById("root");

// const reactRoot = ReactDOM.createRoot(root);
// reactRoot.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/reducers";
import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

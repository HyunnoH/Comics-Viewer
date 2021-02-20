import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./react/index.css";
import App from "./react/App";
import * as serviceWorker from "./react/serviceWorker";
import { GlobalStyle } from "./react/styles";
import store from "./react/store/createStore";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

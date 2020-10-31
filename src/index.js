import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { searchRobots } from "./reducers";
import { createLogger } from "redux-logger";

import App from "./containers/App";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

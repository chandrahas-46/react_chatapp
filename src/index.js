import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";
// import { configureStore } from "./store/store";
import { store } from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const store = configureStore();
root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);


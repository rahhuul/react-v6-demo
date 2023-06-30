import React from "react";
import { hydrate } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/reset.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

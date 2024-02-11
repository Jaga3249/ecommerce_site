import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App.jsx";
import { app } from "./firebase.config.js";
import "./index.css";
import { persistor, store } from './redux/store';
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <Provider store={store} app={app} >
    <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
      
    </Provider>
    ,
  </MantineProvider>
);

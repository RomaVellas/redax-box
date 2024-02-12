import React from "react";
import ReactDOM from 'react-dom/client';

import { configureStore } from "@reduxjs/toolkit"; 
import reducer from "./reducer";
import { Provider } from "react-redux";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer});

      root.render(
         <Provider store={store}>
            <App/>
         </Provider>
      )
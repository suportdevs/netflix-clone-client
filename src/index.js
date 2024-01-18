import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Watch from "./pages/Watch/Watch"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Provider, useSelector } from 'react-redux';
import {store} from './services/store';
import Dashboard from './pages/Admin/Dashboard';
import Layout from './components/Admin/Layout';
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      {/* <RouterProvider router={router}/> */}
      <BrowserRouter>
          <App />
      </BrowserRouter>
    <Toaster />
    </Provider>
);

reportWebVitals();

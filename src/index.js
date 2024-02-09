import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './services/store';
import { BrowserRouter } from 'react-router-dom';
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

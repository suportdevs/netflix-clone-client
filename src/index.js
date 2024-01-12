import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Watch from "./pages/Watch/Watch"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Provider } from 'react-redux';
import {store} from './services/store';
import Dashboard from './pages/Admin/Dashboard';

const user = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: (user ? <Home /> : <Navigate to="/register" />),
  },
  {
    path: '/series',
    element: (user ? <Home type='series' /> : <Navigate to="/register" />),
  },
  {
    path: '/movies',
    element: (user ? <Home type='movies' /> : <Navigate to="/register" />),
  },
  {
    path: '/watch',
    element: <Watch />,
  },
  {
    path: '/register',
    element: (!user ? <Register /> : <Navigate to="/" />),
  },
  {
    path: '/login',
    element: (!user ? <Login /> : <Navigate to="/" />),
  },
  {
    path: '/admin/dashboar',
    element: (!user ? <Dashboard /> : <Navigate to="/" />),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Watch from "./pages/Watch/Watch"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Provider } from 'react-redux';
import {store} from './services/store';
import Dashboard from './pages/Admin/Dashboard';
import Layout from './components/Admin/Layout';
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';

const user = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      {/* <RouterProvider router={router}/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Navigate to='/register' />} />
          <Route path="/series" element={user ? <Home type="series" /> : <Navigate to='/register' />} />
          <Route path="/movies" element={user ? <Home type="movies" /> : <Navigate to='/register' />} />
          <Route path="/match" element={user ? <Watch /> : <Navigate to='/register' />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/admin' element={<Layout />}>
            <Route path="dashboard" element={user ? <Dashboard /> : <Navigate to="/register" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </Provider>
);

reportWebVitals();

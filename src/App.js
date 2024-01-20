import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/Watch/Watch';
import Layout from './components/Admin/Layout';
import Dashboard from './pages/Admin/Dashboard';
import ProductList from './pages/Admin/ProductList';
import { useSelector } from 'react-redux';
import MovieList from './pages/Admin/MovieList';

function App() {
const user = useSelector((state) => state.user.user);

  return (
    <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to='/register' />} />
        <Route path="/series" element={user ? <Home type="series" /> : <Navigate to='/register' />} />
        <Route path="/movies" element={user ? <Home type="movies" /> : <Navigate to='/register' />} />
        <Route path="/watch" element={user ? <Watch /> : <Navigate to='/register' />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/admin' element={<Layout />}>
          <Route path="dashboard" element={(user && user.role == 'Admin') ? <Dashboard /> : <Navigate to="/register" />} />
          <Route path='dashboard/movies' element={<MovieList />} />
        </Route>
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Register />} path='/register'></Route>
          <Route element={<Login />} path='/login'></Route>
          <Route element={<MainPage />} path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

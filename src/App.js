import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Páginas
import Home from './pages/Home.jsx';
import History from './pages/History.jsx'
import Login from './pages/Login.jsx';

export default function App() {
  return (
    <div>
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/history' element={<History />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

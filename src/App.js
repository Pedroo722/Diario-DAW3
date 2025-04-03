import React from 'react'; 
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';

// Páginas
import Home from './pages/Home.jsx';
import Generic from './pages/Generic.jsx'

export default function App() {  
  return ( 
    <div>
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/generic' element={<Generic />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
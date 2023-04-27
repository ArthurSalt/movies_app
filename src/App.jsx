import React from 'react';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Watchlist from './components/Watchlist';
import  Watched  from './components/Watched';
import { Add } from './components/Add';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Watchlist />} />
        <Route exact path='/watched' element={<Watched />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

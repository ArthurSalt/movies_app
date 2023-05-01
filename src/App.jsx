import React from 'react';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Watchlist />} />
        <Route exact path='/watched' element={<Watched />} />
        <Route exact path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

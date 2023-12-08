import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './movies/Header';
import Watchlist from './movies/Watchlist';
import Watched from './movies/Watched';
import Add from './movies/Add';
import Footer from './movies/Footer';
import { MoviePage } from './movies/MoviePage/MoviePage';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter basename='/movies_app'>
        <Header />
        <Routes>
          <Route exact path='/watchlist' element={<Watchlist />} />
          <Route exact path='/watched' element={<Watched />} />
          <Route exact path='/' element={<Add />} />
          <Route exact path='/:id' element={<MoviePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
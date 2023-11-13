import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/movies/Header';
import Watchlist from './components/movies/Watchlist';
import Watched from './components/movies/Watched';
import Add from './components/movies/Add';
import Posts from './components/forum/Posts';
import Footer from './components/movies/Footer';
import { MoviePage } from './components/movies/MoviePage/MoviePage';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter basename='/movies_app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Watchlist />} />
          <Route exact path='/watched' element={<Watched />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/forum' element={<Posts />} />
          <Route exact path='/:id' element={<MoviePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
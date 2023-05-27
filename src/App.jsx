import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import Posts from './forum/Posts';
import { GlobalProvider } from './context/GlobalState';




function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Watchlist />} />
          <Route exact path='/watched' element={<Watched />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/forum' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

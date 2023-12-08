import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ResultCard from './ResultCard/ResultCard';
import PaginationMovies from './PaginationMovies';

import '../App.css';
const Add = () => {
  const {searchValue, setSearchValue, page, setPage} = useContext(GlobalContext)
  const [results, setResults] = useState(localStorage.getItem('fetchResults') !== 'undefined' ? JSON.parse(localStorage.getItem('fetchResults')) : []);

  // const movies = results ? results.filter(obj => obj.Type === 'movie') : null;

  const getFilms = async () => {
    try {
      const url = `https://www.omdbapi.com/?apikey=4896bdea&s=${searchValue}&page=${page}`
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem('fetchResults', JSON.stringify(data.Search))
      setResults(data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFilms()
  }, [page])

  function onChange(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      getFilms()
      setPage(1)
    }
  }

  function onClickSearch() {
    getFilms()
    setPage(1)
  }

  return (
    <div className="add-page">
      <div className="add-content">
        <img className='bg_img' src="https://www.elsubtitle.com/wp-content/uploads/2017/05/elsubtitle_header.jpg" alt="" />
        <div className="input-wrapper">
          <input type="text"
            placeholder='Search for a movie... e.g. Harry Potter'
            value={searchValue}
            onChange={onChange} 
            onKeyDown={handleKeyDown}/>
          <button className='btn' onClick={onClickSearch}>Search</button>
        </div>
        {results && (
          <div className='results_wrapper'>
            <ul className="results">
              {results.map(movie => (
                <li key={movie.imdbID} className='result_card_wrapper'>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
            <PaginationMovies page={page} setPage={setPage}/>
          </div>
          )}
      </div>
    </div>
  )
};

export default Add;
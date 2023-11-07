import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard/ResultCard';
import PaginationMovies from './PaginationMovies';

import '../../App.css';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(localStorage.getItem('fetchResults') !== 'undefined' ? JSON.parse(localStorage.getItem('fetchResults')) : []);
  const [page, setPage] = useState(1);

  const getFilms = async () => {
    try {
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=4896bdea&s=${query}&page=${page}`
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem('fetchResults', JSON.stringify(data.Search))
      setResults(data.Search)
      console.log(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFilms()
  }, [page])

  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      getFilms()
    }
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder='Search for a movie'
              value={query}
              onChange={onChange} 
              onKeyDown={handleKeyDown}/>
            <button className='btn' onClick={getFilms}>Search</button>
          </div>

          {results && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.imdbID} className='result_card_wrapper'>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          <PaginationMovies page={page} setPage={setPage}/>
        </div>
      </div>
    </div>
  )
};

export default Add;
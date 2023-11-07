import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard/ResultCard';

import '../../App.css';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(localStorage.getItem('fetchResults') !== 'undefined' ? JSON.parse(localStorage.getItem('fetchResults')) : []);

  const getFilms = async () => {
    try {
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=4896bdea&s=${query}`
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem('fetchResults', JSON.stringify(data.Search))
      setResults(data.Search)
    } catch (error) {
      console.log(error)
    }
  }

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
        </div>
      </div>
    </div>
  )
};

export default Add;
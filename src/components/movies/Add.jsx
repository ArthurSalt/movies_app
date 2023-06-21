import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard/ResultCard';

import '../../App.css';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(localStorage.getItem('fetchResults') ? JSON.parse(localStorage.getItem('fetchResults')) : []);

  // const getMovies = async () => {
  //   const url = 'https://moviesdatabase.p.rapidapi.com/titles';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '821f8762f7mshad36b6397ecd8edp18cf51jsnde811bb8c9ea',
  //       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     console.log(data.results);
  //     setResults(data.results)
  //     localStorage.setItem('fetchResults', JSON.stringify(data.results))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const getFilms = async () => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=4896bdea&s=${query}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Search)
    setResults(data.Search)
    localStorage.setItem('fetchResults', JSON.stringify(data.Search))
  }


  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder='Search for a movie'
              value={query}
              onChange={onChange} />
            <button className='btn' onClick={getFilms}>Search</button>
          </div>

          {results && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.imdbID}>
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
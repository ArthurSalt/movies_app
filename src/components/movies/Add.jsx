import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import '../../App.css';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const getMovies = async () => {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '821f8762f7mshad36b6397ecd8edp18cf51jsnde811bb8c9ea',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  const getBurgers = async () => {
    const url = `https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=195`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data);
    console.log(data)
  }

  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    // getMovies();
  }

  // const getData = () => {
  //   getBurgers();
  // }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder='Search for a movie'
              value={query}
              onChange={onChange} />
            <button className='btn' onClick={getMovies}>Search</button>
          </div>

          {results && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
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
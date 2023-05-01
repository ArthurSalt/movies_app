import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const getMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/find?q=search';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '821f8762f7mshad36b6397ecd8edp18cf51jsnde811bb8c9ea',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.results);
      setResults(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])


  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    getMovies();
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
          </div>

          {results && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
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
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from './MovieCard/MovieCard';

import '../../App.css';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className="header">
          <h1 className='heading'>My Watchlist</h1>
          <span className='count'> {watchlist.length}  {watchlist.length === 1 ? "Movie" : "Movies"}</span>
          {watchlist.length > 0 ? (
            <div className='movies_list'>
              {watchlist.map((movie) => (
                <li key={movie.imdbID} className='result_card_wrapper'>
                  <MovieCard movie={movie} type='watchlist' />
                </li>

              ))}
            </div>
          ) : (
            <h2 className='no-movies'>No movies listed</h2>
          )}
        </div>
      </div>
    </div >
  )
}

export default Watchlist;

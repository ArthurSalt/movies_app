import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';


const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <h1 className='heading'>My Watchlist</h1>
        {watchlist.length > 0 ? (
          <div>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type='watchlist'/>
         ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies listed</h2>
        )}
      </div>
    </div>
  )
}

export default Watchlist;

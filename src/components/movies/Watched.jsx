import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { WatchedMovieCard } from './MovieCard/WatchedMovieCard'

import '../../App.css';

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <h1 className='heading'>Watched Movies</h1>
        <span className='count'> {watched.length} {watched.length === 1 ? "Movie" : "Movies"}</span>
        {watched.length > 0 ? (
          <div className='watched_movies_list'>
            {watched.map((movie) => (
              <li key={movie.imdbID} className='watched_result_card_wrapper'>
                <WatchedMovieCard movie={movie} type='watched' />
              </li>

            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies listed</h2>
        )}
      </div>
    </div>
  )
}

export default Watched

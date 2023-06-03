import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { MovieCard } from './MovieCard'

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <h1 className='heading'>Watched Movies</h1>
        {watched.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {watched.map((movie) => (
              <MovieCard movie={movie} type='watched' />
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

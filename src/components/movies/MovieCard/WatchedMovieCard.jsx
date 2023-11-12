
import MovieControlls from '../MovieControlls';

import './MovieCard.css';

export const WatchedMovieCard = ({ movie, type }) => {
  return (
      <div className="watched_result_card">
        <div className="watched_poster">
          {movie.Poster ? (
              <img className='watched_poster_img' src={movie.Poster} alt="poster" />
            ) : (
              <p>No poster</p>
            )}
        </div>
        <div className='watched_movie_info'>
            <div>
              <h3>{movie.Title}</h3>
              <h4>{movie.Year}</h4>
            </div>
            <MovieControlls movie={movie} type={type} />
        </div>
      </div>
      
  );
}

export default WatchedMovieCard;
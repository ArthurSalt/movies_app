
import MovieControlls from '../MovieControlls';

import '../../../App.css';

export const MovieCard = ({ movie, type }) => {
   return (
      <div className='movie_card'>
         {movie.Poster ? (
            <img className='poster' src={movie.Poster} alt="poster" />
         ) : (
            <p>No poster</p>
         )}

         <MovieControlls movie={movie} type={type} />
      </div>
   );
}

export default MovieCard;
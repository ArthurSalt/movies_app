
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
         <h3>{movie.Title.length > 40
            ? movie.Title.slice(0, 40) + "..."
            : movie.Title
         }</h3>
         <h4>{movie.Year}</h4>

         <MovieControlls movie={movie} type={type} />
      </div>
   );
}

export default MovieCard;

import MovieControlls from './MovieControlls';


const MovieCard = ({ movie, type }) => {
   return (
      <div>
         {movie.image ? (
            <img src={movie.image} alt="poster" />
         ) : (
            <p>No poster</p>
         )}

         <MovieControlls movie={movie} type={type} />
      </div>
   );
}

export default MovieCard;
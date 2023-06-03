
import MovieControlls from './MovieControlls';


export const MovieCard = ({ movie, type }) => {
   return (
      <div>
         {movie.image ? (
            <img src={movie.image} width='200px' height='250px' alt="poster" />
         ) : (
            <p>No poster</p>
         )}

         <MovieControlls movie={movie} type={type} />
      </div>
   );
}

export default MovieCard;
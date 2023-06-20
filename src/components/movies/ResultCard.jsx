import React, { useContext } from 'react';
import '../../App.css';
import { GlobalContext } from '../../context/GlobalState';

const ResultCard = ({ movie }) => {
   const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext)

   let storedMovie = watchlist.find(obj => obj.imdbID === movie.imdbID);
   let watchedMovie = watched.find(obj => obj.imdbID === movie.imdbID);
   let watchlistDisabled = storedMovie || watchedMovie ? true : false;

   return (
      <div className='result-card'>
         <div className='movie_info'>
            <img src={movie.Poster} width='200px' height='250px' alt="" />
            <h2>{movie.Title}</h2>
            <h3 style={{ textAlign: 'center' }}>{movie.Year}</h3>
            <button className='controls btn'
               disabled={watchlistDisabled}
               onClick={() => addMovieToWatchlist(movie)}
            >{watchedMovie ? 'Watched' : 'Add to Watchlist'}</button>
         </div>
         {/* <divs className="poster-wrapper">
            {movie.imageurl[0] ? (
               <img src={movie.imageurl[0]} alt={movie.title} />
            ) : (
               <div className="filler-poster"></div>
            )}
         </divs> */}
      </div>
   );
}

export default ResultCard;
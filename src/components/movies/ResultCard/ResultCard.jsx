import React, { useContext } from 'react';
import './ResultCard.css';
import { GlobalContext } from '../../../context/GlobalState';

const ResultCard = ({ movie }) => {
   const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext)

   let title = movie.Title.length > 40 ? movie.Title.split('').slice(20).join('') + '...' : movie.Title;
   let storedMovie = watchlist.find(obj => obj.imdbID === movie.imdbID);
   let watchedMovie = watched.find(obj => obj.imdbID === movie.imdbID);
   let watchlistDisabled = storedMovie || watchedMovie ? true : false;

   return (
      <div className='result_card'>
         <div className='movie_info'>
            <img className='poster' src={movie.Poster} alt="" />
            <div className='movie_data'>
               <h2>{movie.Title.split('').length > 40 
               ? movie.Title.split('').slice(0, 40).join('') + "..." 
               : movie.Title
              }</h2>
               <h3>{movie.Year}</h3>
            </div>
            <button className='controls btn'
               disabled={watchlistDisabled}
               onClick={() => addMovieToWatchlist(movie)}
            >{watchedMovie ? 'Watched' : 'Add to Watchlist'}</button>
         </div>
      </div>
   );
}

export default ResultCard;
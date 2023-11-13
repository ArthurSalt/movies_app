import React, { useContext, useState } from 'react';
import './ResultCard.css';
import { GlobalContext } from '../../../context/GlobalState';
import { Link } from 'react-router-dom';

const ResultCard = ({ movie }) => {
   const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext)

   let storedMovie = watchlist.find(obj => obj.imdbID === movie.imdbID);
   let watchedMovie = watched.find(obj => obj.imdbID === movie.imdbID);
   let watchlistDisabled = storedMovie || watchedMovie ? true : false;

   return (
      <div className='result_card'>
         <div className='movie_info'>
            <Link to={`/${movie.imdbID}`}>
               <img className='poster' src={movie.Poster} alt="Movie Poster" />
            </Link>            
            <div className='movie_data'>
               <h3>{movie.Title.length > 30
                  ? movie.Title.slice(0, 30) + "..."
                  : movie.Title
               }</h3>
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
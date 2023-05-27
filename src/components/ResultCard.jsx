import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
   const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext)

   let storedMovie = watchlist.find(obj => obj.id === movie.id);
   let watchedMovie = watched.find(obj => obj.id === movie.id);
   let watchlistDisabled = storedMovie || watchedMovie ? true : false;

   return (
      <div className='result-card'>
         <div className="burger_info">
            <img src={movie.image} width='200px' height='250px' alt="" />
            <h2>{movie.name}</h2>
            <button className='controls btn'
               disabled={watchlistDisabled}
               onClick={() => addMovieToWatchlist(movie)}
            >{watchedMovie ? 'Watched' : 'Add to Watchlist'}</button>
         </div>
         {/* <div className="poster-wrapper">
            {movie.imageurl[0] ? (
               <img src={movie.imageurl[0]} alt={movie.title} />
            ) : (
               <div className="filler-poster"></div>
            )}
         </div> */}
      </div>
   );
}

export default ResultCard;
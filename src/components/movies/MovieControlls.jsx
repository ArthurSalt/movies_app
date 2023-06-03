import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const MovieControlls = ({ movie, type }) => {

    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext)

    return (
        <div className="inner-card-controlls">
            {type === 'watchlist' && (
                <>
                    <button className='ctrl btn' onClick={() => { addMovieToWatched(movie); removeMovieFromWatchlist(movie.id) }}>Watched</button>
                    <button className='ctrl btn' onClick={() => removeMovieFromWatchlist(movie.id)}>Remove</button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className='ctrl btn' onClick={() => moveToWatchlist(movie)}>Watch Again</button>
                    <button className='ctrl btn' onClick={() => removeFromWatched(movie.id)}>Remove</button>
                </>
            )}
        </div>
    );
}

export default MovieControlls;
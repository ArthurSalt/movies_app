import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControlls = ({ movie, type }) => {

    const { removeMovieFromWatchlist } = useContext(GlobalContext)

    return (
        <div className="inner-card-controlls">
            {type === 'watchlist' && (
                <>
                    <button className='ctrl btn'>Watched</button>
                    <button className='ctrl btn' onClick={() => removeMovieFromWatchlist(movie.id)}>Remove</button>
                </>
            )}
        </div>
    );
}

export default MovieControlls;
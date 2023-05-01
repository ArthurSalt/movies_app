import React from 'react';

const ResultCard = ({ movie }) => {
   return (
      <div className='result-card'>
         <div className="poster-wrapper">
            {movie.imageurl[0] ? (
               <img src={movie.imageurl[0]} alt={movie.title} />
            ) : (
               <div className="filler-poster"></div>
            )}
         </div>
      </div>
   );
}

export default ResultCard;
import React, {useState} from 'react'

export const PaginationMovies = ({page, setPage}) => {

  return (
    <div className="pagination_movies_wrapper">
      <div className="pagination__movies">
        {[...new Array(11).keys()].map((num) => {
            if (num > 0) return (
              <li key={num} onClick={() => setPage(num)} className={(num === page) ? 'page--active' : 'page'}>{num}</li>
            )
          } 
        )}
      </div>
    </div>
  )
}

export default PaginationMovies
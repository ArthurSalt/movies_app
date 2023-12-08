import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header_top'>
      <div className="container">
        <div className="header__content">
          <div className="brand">
            <Link to='/'>WatchList</Link>
          </div>

          <ul className="nav_links">
            <li>
              <Link to='/watchlist' >Watch List</Link>
            </li>
            <li>
              <Link to='/watched'>Watched</Link>
            </li>
            <li>
              <Link to='/' className='btn'>+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
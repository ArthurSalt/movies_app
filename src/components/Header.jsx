import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to='/'>WatchList</Link>
          </div>

          <ul className="nav_links">
            <li>
              <Link to='/' >Watch List</Link>
            </li>
            <li>
              <Link to='/watched'>Watched</Link>
            </li>
            <li>
              <Link to='/add' className='btn'>+ Add</Link>
            </li>
            <li>
              <Link to='/forum' className='btn'>Forum</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
};
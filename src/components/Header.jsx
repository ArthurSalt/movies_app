import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to='/'>Watch List</Link>
          </div>

          <ul className="nav_links">
            <li>
              <Link to='/'>Watch List</Link>  
            </li>

            <li>
              <Link to='/watched'>Watched lists</Link>  
            </li>

            <li>
              <Link to='/add'>Watched lists</Link>  
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

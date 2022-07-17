import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
//import PropTypes from 'prop-types'

const Navbar = () => {

  let location = useLocation();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/business"?"active":""}`} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/science"?"active":""}`} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/sports"?"active":""}`} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar

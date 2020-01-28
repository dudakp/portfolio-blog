import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import '../../styles/blogLayout.scss'

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

const SideMenu = props => (
  <div className="sidemenu">
    <Link to="/">
      <div className='home'>
        <FontAwesomeIcon icon={faHome} />
      </div>
    </Link>
    <Link to="/">
      <div>Categories</div>
    </Link>
    <Link to="/">
      <div>About</div>
    </Link>
  </div>
)

export default ({ children }) => (
  <div className="container">
    <header>
      <Link to="/" className="title-link">
        <h3 className="blog-title">Underreacted</h3>
      </Link>
    </header>
    <SideMenu></SideMenu>
    {children}
  </div>
)

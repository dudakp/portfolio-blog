import React from 'react'
import '../../styles/blogLayout.scss'

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

const SideMenu = props => (
  <div class="menu sticky">
    <p class="menu-label">
      <b>Underrected</b>
    </p>
    <ul id="menu" class="menu-list">
      <li>
        <a href="#basic">Home</a>
      </li>
      <li>
        <a href="#keyword">Categories</a>
      </li>
      <li>
        <a href="#onpage">About</a>
      </li>
    </ul>
  </div>
)

export default ({ children }) => (
  <div className="container">
    <div class="hero-body has-text-centered" style={{ paddnigTop: 0 }}>
      <div class="container">
        <h1 class="title title-blog"> Underreacted </h1>
        <h2 class="subtitle">Pavol Dudak | Hope you will to code from me </h2>
      </div>
    </div>
    <hr></hr>
    <div className="columns">
      <div class="column"><SideMenu></SideMenu></div>
      <div className="column is-half"> {children} </div>
      <div className="column"></div>
    </div>
  </div>
)

import React from 'react';
import '../../styles/blogLayout.scss';
import SideMenu from '../blog/SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

export default ({ searchbar, children }) => {

  return (
    <div className="container" id="top">
      <div className="hero-body has-text-centered" style={{ paddnigTop: 0 }}>
        <div className="container">
          <h1 className="title is-2 title-blog is-uppercase">
            <Link className="title-link" to='/' >Underreacted</Link>
          </h1>
          <h2 className="subtitle is-4">Pavol Dudak | Hope you will learn to code from me </h2>
        </div>
      </div>
      <hr></hr>
      <div className="columns blog-content">
        <div className="column is-centered">
          {searchbar}
          <SideMenu></SideMenu>
        </div>
        <div className="column is-half article-body">
          {children}
        </div>
        <div className="column"></div>
      </div>
      <a href="#top" className="back-to-top">
        <FontAwesomeIcon icon={faArrowUp} size='2x'></FontAwesomeIcon>
      </a>
    </div>
  );
}
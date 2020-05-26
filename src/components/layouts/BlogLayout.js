import React from 'react';
import '../../styles/blogLayout.scss';
import SideMenu from '../blog/SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default ({ children }) => (
  <div className="container" id="top">
    <div className="hero-body has-text-centered" style={{ paddnigTop: 0 }}>
      <div className="container">
        <h1 className="title is-2 title-blog is-uppercase">
          Underreacted
        </h1>
        <h2 className="subtitle is-4">Pavol Dudak | Hope you will to code from me </h2>
      </div>
    </div>
    <hr></hr>
    {/* <a id="title"></a> */}
    <div className="columns">
      <div className="column">
        <SideMenu></SideMenu>
      </div>
      <div className="column is-half article-body"> {children} </div>
      <div className="column"></div>
    </div>
    <a href="#top" className="back-to-top">
      <FontAwesomeIcon icon={faArrowUp} size='2x'></FontAwesomeIcon>
    </a>
  </div>
);

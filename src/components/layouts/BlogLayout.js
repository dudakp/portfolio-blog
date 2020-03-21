import React from 'react';
import '../../styles/blogLayout.scss';
import SideMenu from '../blog/SideMenu';

export default ({ children }) => (
  <div className="container">
    <div className="hero-body has-text-centered" style={{ paddnigTop: 0 }}>
      <div className="container">
        <h1 className="title title-blog"> Underreacted </h1>
        <h2 className="subtitle">
          Pavol Dudak | Hope you will to code from me{' '}
        </h2>
      </div>
    </div>
    <hr></hr>
    <div className="columns">
      <div className="column">
        <SideMenu></SideMenu>
      </div>
      <div className="column is-half article-body"> {children} </div>
      <div className="column"></div>
    </div>
  </div>
);

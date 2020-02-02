import React from 'react';
import '../../styles/blogLayout.scss';
import SideMenu from '../blog/SideMenu';

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
      <div class="column">
        <SideMenu></SideMenu>
      </div>
      <div className="column is-half"> {children} </div>
      <div className="column"></div>
    </div>
  </div>
);

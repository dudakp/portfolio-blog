import React from 'react';
import SideMenu from '../components/blog/SideMenu';
import '../styles/landingPage.scss';

const IndexPage = () => (
  <div className="landingBackround">
    <div className="landingRoot">
      <div className="container is-10">
        <div className="columns">
          <div className="column">
            <h1 className="title" id="name">
              Pavol Dudak
            </h1>
            <h1 className="title" id="workTitle">
              Fullstack web <br /> developer
            </h1>
            <cite className="landingCitation">
              “Minimalism is the best excuse for lazyness”
            </cite>
          </div>
        </div>
      </div>
      <div id="landingMenu">
        <SideMenu></SideMenu>
      </div>
    </div>
  </div>
);

export default IndexPage;

import { Link } from 'gatsby';
import Identicon from 'identicon.js';
import React from 'react';
import '../../styles/articleItem.scss';

export default ({ title, date, desc, category, readingTime, path }) => {
  const options = {
    foreground: [129, 127, 127, 255],
    background: [255, 255, 255, 255],
    format: 'svg',
  };
  const titleNameForHash =
    title.length >= 15 ? title : `askm897907asmlkdmsa${title}lskgyamw73m56xas`;

  const identiconData = new Identicon(titleNameForHash, options).toString();

  return (
    <div className="columns article-item">
      <div className="column is-narrow is-vcentered is-hidden-mobile article-icon ">
        <img src={'data:image/svg+xml;base64,' + identiconData}></img>
      </div>
      <div className="column">
        <Link to={path}>
          <h1 className="title">{title}</h1>
        </Link>
        <div className="columns is-gapless is-marginless">
          <div className="column is-narrow">
            <h2> {category} |</h2>
          </div>
          <div className="column is-narrow">
            <h2> {date} |</h2>
          </div>
          <div className="column is-narrow">
            <h2> {readingTime} min read</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-gapless">
            <p className="is-gapless">{desc}</p>
          </div>
        </div>
        <hr className="is-marginless"></hr>
      </div>
    </div>
  );
};

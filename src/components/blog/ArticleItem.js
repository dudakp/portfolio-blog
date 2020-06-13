import { Link } from 'gatsby';
import Identicon from 'identicon.js';
import React from 'react';
import '../../styles/articleItem.scss';

export default ({ title, date, desc, category, readingTime, path, tags }) => {
  const options = {
    foreground: [129, 127, 127, 255],
    background: [255, 255, 255, 255],
    format: 'svg',
  };

  const hashCode = s => {
    for (var i = 0, h = 0; i < s.length; i++)
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    return h;
  };

  const titleNameForHash = `asd908asd${hashCode(title)}1209sda98`;

  const identiconData = new Identicon(titleNameForHash, options).toString();

  return (
    <div className="columns article-item">
      <div className="column is-narrow is-hcentered is-hidden-mobile article-icon ">
        {readingTime ? <img src={'data:image/svg+xml;base64,' + identiconData}></img> : ''}

      </div>
      <div className="column">
        <Link to={path}>
          <h1 className="title is-2 article-title">{title}</h1>
        </Link>
        <div className="columns is-gapless is-marginless">
          <div className="column is-narrow">
            <h2 className="subtitle"> {category} |</h2>
          </div>
          <div className="column is-narrow">
            <h2 className="subtitle"> {date} </h2>
          </div>
          {readingTime ? 
          <div className="column is-narrow">
            <h2 className="subtitle">| {readingTime} min read</h2>
          </div>
          : <></>}
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

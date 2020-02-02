import Identicon from 'identicon.js';
import React from 'react';

export default props => {
  const options = {
    foreground: [129, 127, 127, 255],
    background: [255, 255, 255, 255],
    format: 'svg',
  };
  const titleNameForHash =
    props.title.length >= 15
      ? props.title
      : `askm897907asmlkdmsa${props.title}lskgyamw73m56xas`;

  const identiconData = new Identicon(titleNameForHash, options).toString();

  return (
    <>
      <div className="columns article-item">
        <div className="column is-narrow is-vcentered is-hidden-mobile article-icon ">
          <img src={'data:image/svg+xml;base64,' + identiconData}></img>
        </div>
        <div className="column ">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.subtitle}</h2>
        </div>
      </div>
    </>
  );
};

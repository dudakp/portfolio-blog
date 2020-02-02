import Identicon from 'identicon.js';
import React from 'react';
import BlogLayout from '../components/layouts/blogLayout.js';

const Item = props => {
  const options = {
    foreground: [129, 127, 127, 255], // rgba black
    background: [255, 255, 255, 255], // rgba white
    format: 'svg',
  };
  const titleNameForHash =
    props.title.length >= 15
      ? props.title
      : `askm897907asmlkdmsa${props.title}lskgyamw73m56xas`;

  console.log(titleNameForHash);

  const data = new Identicon(titleNameForHash, options).toString();

  return (
    <>
      <div className="columns article-item">
        <div className="column is-narrow is-vcentered is-hidden-mobile article-icon ">
          <img src={'data:image/svg+xml;base64,' + data}></img>
        </div>
        <div className="column ">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.subtitle}</h2>
        </div>
      </div>
    </>
  );
};

export default () => {
  const articles = [
    {
      title: 'Hello cunt',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'Hello bitch',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'Hello alfkhsdafmfsd',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'Hello loremsdfn,smdanf',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'asss cunt',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'asd;kasfpoj cunt',
      subtitle: 'im here to teach how to code, bitch',
    },
    {
      title: 'Hello cunasdasdt',
      subtitle: 'im here to teach how to code, bitch',
    },
  ];
  return (
    <BlogLayout>
      {articles.map(article => (
        <Item title={article.title} subtitle={article.subtitle}></Item>
      ))}
    </BlogLayout>
  );
};

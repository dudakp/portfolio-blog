import React from 'react';
import ArticleItem from '../components/blog/ArticleItem';
import BlogLayout from '../components/layouts/BlogLayout';

export default () => {
  const articles = [
    {
      title: 'Digitized multi-tasking knowledge base',
      subtitle:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    {
      title: 'Programmable holistic superstructure',
      subtitle:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      title: 'Front-line grid-enabled projection',
      subtitle:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    {
      title: 'Optimized reciprocal matrix',
      subtitle:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    },
    {
      title: 'Persistent exuding policy',
      subtitle:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    },
    {
      title: 'Expanded maximized frame',
      subtitle:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    {
      title: 'Right-sized disintermediate neural-net',
      subtitle:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    {
      title: 'Decentralized fresh-thinking adapter',
      subtitle:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    {
      title: 'Open-source incremental capability',
      subtitle:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    },
    {
      title: 'Advanced grid-enabled moderator',
      subtitle:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    {
      title: 'Self-enabling demand-driven time-frame',
      subtitle:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    {
      title: 'Up-sized heuristic archive',
      subtitle: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    },
    {
      title: 'Customizable user-facing hardware',
      subtitle:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    },
    {
      title: 'Assimilated composite analyzer',
      subtitle:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    },
    {
      title: 'Extended tertiary moratorium',
      subtitle:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
  ];
  return (
    <BlogLayout>
      {articles.map(article => (
        <ArticleItem
          title={article.title}
          subtitle={article.subtitle}
        ></ArticleItem>
      ))}
    </BlogLayout>
  );
};

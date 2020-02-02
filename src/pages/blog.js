import React from 'react'
import BlogLayout from '../components/layouts/blogLayout.js'
import BlogIcon from '../components/utils/iconGenerator'

const Item = () => (
  <>
    <div className="columns article-item">
      <div className="column is-narrow is-vcentered is-hidden-mobile ">
        <BlogIcon
          hashMatrix={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        ></BlogIcon>
        {/* <FontAwesomeIcon icon={faBraille}></FontAwesomeIcon> */}
      </div>
      <div className="column ">
        <h1 className="title">
          Hi! I'm building a fake Gatsby site as part of a tutorial!
        </h1>
        <h2 className="subtitle">
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </h2>
      </div>
    </div>
  </>
)

export default () => (
  <BlogLayout>
    {Array(10)
      .fill(1)
      .map(() => (
        <Item></Item>
      ))}
  </BlogLayout>
)

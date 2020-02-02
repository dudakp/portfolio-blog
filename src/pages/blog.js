import React from 'react'
import BlogLayout from '../components/layouts/blogLayout.js'

const Item = () => (
  <>
    <div className="columns">
      <div className="column">
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

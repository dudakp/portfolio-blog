import React from 'react'
import BlogLayout from '../components/layouts/blogLayout.js'

const Item = () => (
  <>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </>
)

export default () => <BlogLayout>{Array(10).fill(1).map(()=><Item></Item>)}</BlogLayout>

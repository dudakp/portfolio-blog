---
path: '/gatsby'
date: '22-03-2020'
title: 'Gatsby (how I made this blog)'
category: 'General'
published: True
---

In the process of how to make this project I've considered two possibilities:

- WordPress
- Static site generator

WordPress will be great for this type of project but, I'm a developer. I can build my own site, not just create them from some template. Also, I wanted to learn something new. So static site generator it is. But there are a lot of options. Jekyll, Next.js, Gatsby just to name a few most popular. I knew React (kinda) and wanted to use it so that my options got thinner.

## Gatsby

So after all I've chosen Gatsby. I've read about it a bit, tried some basic tutorials, and I loved it and decide to stick with it.

## Setup

There are great examples on Gatsby site on how to set up your project so don't expect this to be a tutorial. Instead I want to share the process of creating this site.
<br>

Gatsby offers many options regarding tech stack. React is not optional, but you can use many styling options (Sass, JSS, PostCSS...) of course you can use any CSS framework.
<br>
As for data, GraphQL is the way of data handling in Gatsby and in my opinion its great.

## My process

After reading few chapters of [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) I've a rough idea how this thing works and started to create basic building blocks.

- ### Styling
  First approach to styling I've tried was [typography.js](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/) but it wasn't it for me. I wanted to use [Sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)<br>
  Setting it up was trivial. Now I had to decide what CSS framework to use.
  I'm used to Bootstrap but Gatsby offered me some other [options](https://www.gatsbyjs.org/docs/css-libraries-and-frameworks/), so I've chosen [Bulma](https://www.gatsbyjs.org/docs/bulma/) (really nice framework, go [check it out](https://bulma.io/)). But it was something new for me, so I've had to watch/read some tutorial/documentation. This [video](https://www.youtube.com/watch?v=IiPQYQT2-wg&t=2171s) really helped me and Bulma has great [documentation](https://bulma.io/documentation/) so you can pick it up really fast. Also, Bulma classes are really easy to remember an intuitive to use.<br>
  <br>

- ## Data
  For basic data querying in simple Gatsby app like this, GraphQL is really easy to pick up.
  If you plan to use it more seriously I suggest to [read more about it](https://www.howtographql.com/).
  Other than that, the examples in tutorials are enough. At first, I considered headless CMS for content management but
  when I found out that you can just create markdown or JSON files in your project and 
  [create pages from them](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/) it was decided 
  (example in that link shows how to use GraphQL with JSON, for Markdown follow this [link](https://www.gatsbyjs.org/docs/adding-markdown-pages/).
  At this moment I've discovered what is JAM stack, and the fact that I'm building JAM stack app. 
  <br>

- ## Comments (bonus)
  While writing this article I didn't realize that my blog doesn't have comment section!
  So a searched how to add comment section to Gatsby site. After considering multiple options
  I decided to create mine own custom comment backend app using Node.js and MongoDB.
  This feature isn't implemented yet but will be soon (I hope :) ), and I will summarize the whole process into one article. 

## Summary
  That its pretty it. Build this site was a breeze. I'm still discovering many aspects of Gatsby. If you are thinking
  about doing this kind of project I'm encouraging you to do it, it's a lot of fun. Well not that much because its really trivial project ;) 
  In the next articles I will try to focus on walking you thought building simple comment API and connecting it with this site.

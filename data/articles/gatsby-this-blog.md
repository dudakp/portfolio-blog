---
path: '/gatsby'
date: '22-03-2020'
title: 'Gatsby (how I made this blog)'
category: 'General'
published: False
---

In the process of how to make this project I've considered two possibilities:

- WordPress
- Static site generator

WordPress will be great for this type of project but, I'm a developer. I can build my own site, not just create them from some template. And also, I wanted to learn something new. So static site generator it is. But there are a lot of options. Jekyll, Next.js, Gatsby just to name a few most popular. I knew React and wanted to use it so that my options got thinner.

## Gatsby

So after all I've chosen Gatsby. I've read about it a bit, tried some basic tutorials and I loved it and decide to stick with it.

## Setup

There are great examples on Gatsby site on how to setup your project so don't expect this to be a tutorial. Instead I want to share the process of creating this site.
<br>

Gatsby offers many options regarding tech stack. React is not optional but you can use many styling options (Sass, JSS, PostCSS...) of course you can use any CSS framework.
<br>
As for data, GraphQL is (I think) proffered way of data handling but Gatsby offers API called createPages where you can handle data in your own way.

## My process

After reading few chapters of [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) I've a rough idea how this thing works and started to create basic building blocks.

- ### Styling
  First approach to styling I've tried was [typography.js](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/) but it wasn't it for me. Like I've mentioned I wanted to use [Sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)<br>
  Setting it up was trivial. Now I had to decide what CSS framework to use.
  I'm used to bootstrap but Gatsby offered me some other [options](https://www.gatsbyjs.org/docs/css-libraries-and-frameworks/)<br>
  So I've chosen [Bulma](https://www.gatsbyjs.org/docs/bulma/) (really nice framework, go [check it out](https://bulma.io/)).<br>
  But it was something new for me, so I've had to watch/read some tutorial/documentation. This [video](https://www.youtube.com/watch?v=IiPQYQT2-wg&t=2171s) really helped me and Bulma has great [documentation](https://bulma.io/documentation/) so you can pick it up really fast. Also, Bulma classes are really easy to remember an intuitive to use.<br>
  <br>

- ## Data
  For basic data querying in simple Gatsby app like this, GraphQL is really easy to pick up. If you plan to use it more seriously I suggest to [read more about it](https://www.howtographql.com/). Other than that, the examples in tutorials are enough. At first I considered headless CMS for content management but when I found out that you can just create markdown or JSON files in your project and [create pages from them](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/) it was decided (example in that link shows how to use GraphQL with JSON, for Markdown follow this [link](https://www.gatsbyjs.org/docs/adding-markdown-pages/).
  <br>

- ## Deploy

- ## Comments (bonus)
  While writing this article i didn't realized that my blog doesn't have comment section! So a searched how to add comment section to Gatsby site. After concidering multiple options I decided to create mine own custom comment backend app using Node.js, MongoDB and GraphQL. Article comming soon!

## Summary

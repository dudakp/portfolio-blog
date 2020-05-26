import React from 'react';
import ArticleItem from '../components/blog/ArticleItem';
import BlogLayout from '../components/layouts/BlogLayout';

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  return (
    <BlogLayout>
      {edges
        .filter(edge => edge.node.frontmatter.category != 'about')
        .filter(edge =>
          location.state?.category == undefined
            ? true
            : edge.node.frontmatter.category.toLowerCase() ===
              location.state?.category.toLowerCase()
        )
        .filter(edge =>
          process.env.NODE_ENV === 'development'
            ? true
            : edge.node.frontmatter.published
        )
        .map(edge => (
          <ArticleItem
            title={edge.node.frontmatter.title}
            desc={edge.node.excerpt}
            readingTime={Math.ceil(edge.node.wordCount.words / 200)}
            date={edge.node.frontmatter.date}
            category={edge.node.frontmatter.category}
            path={edge.node.frontmatter.path}
            key={edge.node.id}
          />
        ))}
    </BlogLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          wordCount {
            words
          }
          frontmatter {
            date
            path
            title
            category
            published
          }
        }
      }
    }
  }
`;

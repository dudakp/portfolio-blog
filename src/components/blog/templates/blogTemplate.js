import { graphql } from 'gatsby';
import React from 'react';
import '../../../styles/blogTemplate.scss';
import BlogLayout from '../../layouts/BlogLayout';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <BlogLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </BlogLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        category
      }
    }
  }
`;

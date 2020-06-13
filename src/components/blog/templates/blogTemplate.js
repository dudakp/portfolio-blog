import { graphql } from 'gatsby';
import React from 'react';
import '../../../styles/blogTemplate.scss';
import BlogLayout from '../../layouts/BlogLayout';
import CommentSection from '../CommentSection';

/* eslint-disable  react/prop-types */
export default ({ data }) => {
  const { markdownRemark } = data;
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
      {/* <CommentSection /> */}
    </BlogLayout>
  );
};

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

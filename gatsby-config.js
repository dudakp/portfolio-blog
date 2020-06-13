require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown_pages',
        path: './data/articles',
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'path', store: true, attributes: { boost: 10 } },
          { name: 'date', store: true },
          { name: 'category', store: true },
          { name: 'tags', store: true },
          { name: 'id', store: true },
          { name: 'htmlContent' },
        ],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            path: (node) => node.frontmatter.path,
            date: (node) => node.frontmatter.date,
            category: (node) => node.frontmatter.category,
            tags: (node) => node.frontmatter.tags,
            content: (node) => node.html,
            id: (node) => node.id,
          },
        },
        filename: 'search_index.json',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
  ],
};

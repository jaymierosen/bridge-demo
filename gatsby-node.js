const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ( {node, getNode, actions} ) => {
  const { createNodeField } = actions;
  if (node.internal.type == `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` });
    createNodeField({
      node,
      name: `slug`,
      value: `slug`,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const {createPage } = actions;
  const res = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(( {node} ) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: path.resolve(`./src/templates/projectPage.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
}
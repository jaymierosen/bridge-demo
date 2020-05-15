import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

// destructure {data} as a prop
const Projects = ({data}) => {
  return (
    <Layout pageTitle='All Projects'>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>Projects</h1>
        </div>
        <div className={utilStyles.padded}>
          <p>Hey, check out these cool bug sculptures I made! If you want me to make you one my commissions are open!</p>
          <ul className={utilStyles.projectList}>
            {data.allMarkdownRemark.edges.map(({node}) => {
              return <li key={node.id}>
              <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
                <div className={utilStyles.subtitle}>
                  <h2><Link to={`projects${node.fields.slug}`} />{node.frontmatter.title}</h2>
                </div>
              </div>
              <p>{node.frontmatter.date}</p>
              <p>{node.frontmatter.summary}</p>
            </li>
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
export const data = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            summary
          }
          id
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`;
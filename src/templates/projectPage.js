import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

const SingleProject = ({data}) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>{project.frontmatter.title}</h1>
        </div>
        <div className={utilStyles.padded}>
          <ReactMarkdown source={project.html} escapeHtml={false} />
        </div>
      </div>
    </Layout>
  );
}

export default SingleProject;
export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
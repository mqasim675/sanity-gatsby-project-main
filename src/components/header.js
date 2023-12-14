// // src/MyComponent.js
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const MyComponent = () => {
  // useStaticQuery hook with a GraphQL query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  // Access the data
  const { title, description } = data.site.siteMetadata;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MyComponent;

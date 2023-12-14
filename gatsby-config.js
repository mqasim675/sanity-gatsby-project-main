/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { useStaticQuery, graphql } = require("gatsby");

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // Other plugins...
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `rjnnfvmc`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: 'skmttkS4QEKyVWD14axHIRekeyfWQw7mXFDmSDcQWa3NkHLpIxEip0JfQ81YvuC3KfcLZwMepP8WB0jhbRIr5bSzvc8MLKcNdulRLzBPdJCDmz9PthkrfEH1VaIfs7O9Jpvd8lLc3UCEpX46R2yfBlZdRhv51cWA7Xd0UYJulks9ck3YlF4I',
        name: 'images',
        path: `${__dirname}/src/images`,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-image`,
    // Other plugins...
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',


    
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'A Gatsby site using useStaticQuery',
  },
};

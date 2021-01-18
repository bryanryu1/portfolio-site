module.exports = {
  siteMetadata: {
    title: `Bryan Ryu`,
    description: `Portfolio website for software engineer, Bryan Ryu`,
    author: `@bryan.ryu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryan Ryu`,
        short_name: `BR`,
        start_url: `/`,
        background_color: `#E9E9E9`,
        theme_color: `#1E7CD9`,
        display: `minimal-ui`,
        icon: `src/images/B.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

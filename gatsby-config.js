module.exports = {
  siteMetadata: {
    title: `My portfolio site`,
    description: `Portfolio website for Flick the Salamander, insect enthusiast and all-round rad dude.`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/` // path to the src folder
      },
    },
  ],
}

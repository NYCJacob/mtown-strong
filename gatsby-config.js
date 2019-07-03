module.exports = {
  siteMetadata: {
    title: "Marbletown Strong",
    author: "",
    description: "Marbletown Strong is an independent expenditure committee registered with the New York Board of Elections"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#111f99',
        theme_color: '#111f99',
        display: 'minimal-ui',
        icon: 'src/images/fist.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

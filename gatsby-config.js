module.exports = {
  siteMetadata: {
    title: "Nico Glennon",
    description: "I design & code things.",
    author: `@nicoglennon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nico Glennon",
        short_name: "Nico Glennon",
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
  ],
};

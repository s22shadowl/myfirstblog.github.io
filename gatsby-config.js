module.exports = {
  siteMetadata: {
    title: `test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "articles",
      "path": "./src/articles/"
    },
  }]
};

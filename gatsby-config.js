require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "whitehatStoic",
  },
  plugins: [
    "gatsby-plugin-postcss",
     {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
        },
      },
    
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //  resolve: `gatsby-plugin-google-analytics`,
    //options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //    trackingId: "UA-166246778-1",
    //  },
    //},
  ],
};

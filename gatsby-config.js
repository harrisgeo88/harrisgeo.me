require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Harris Geo`,
    titleTemplate: "%s Personal Blog",
    description: "Sharing some cool stuff I have learned about web development",
    url: "https://www.harrisgeo.me",
    image:
      "https://images.prismic.io/harrisgeo%2Fd8abaa2d-b275-4896-a887-bd3263774172_me-snow.jpg?auto=compress,format",
    author: "@harrisgeo88",
    twitterUsername: "@harrisgeo88",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-typescript`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `harris-geo-blog`,
        short_name: `harris-geo`,
        start_url: `/`,
        background_color: `#00b3b0`,
        theme_color: `#00b3b0`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "harrisgeo",
        accessToken: process.env.API_KEY,
        schemas: {
          page: require("./src/schemas/page.json"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137238882-1",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}

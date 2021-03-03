module.exports = {
  pathPrefix: "/HomePage",
  siteMetadata: {
    title: `Chao's Home Page`,
    name: `Chao Zhang`,
    siteUrl: `https://czhang-pstat.github.io/HomePage`,
    description: `research`,
    hero: {
      heading: `Thoughts & Code on Functional Data Analysis, Deep Learning, and Formula One.`,
      maxWidth: 752,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-mathjax`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

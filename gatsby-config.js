module.exports = {
  siteMetadata: {
    title: `ITHard`,
    name: `White Prime`,
    siteUrl: `https://novela.narative.co`,
    description: `interesting notes on the use of technology in everyday life`,
    hero: {
      heading: `interesting notes on the use of technology in everyday life`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `github`,
        url: `https://github.com/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/`,
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

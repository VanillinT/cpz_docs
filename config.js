const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://support.cryptuoso.com",
    gaTrackingId: null,
  },
  header: {
    logo: "https://support.cryptuoso.com/cryptuoso_logo.png",
    logoLink: "https://support.cryptuoso.com",
    title: "CRYPTUOSO - Support and Docs",
    githubUrl: "https://github.com/cryptuoso/cpz_docs",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "learn-hasura-test",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      "/index",
      "/robots",
      "/signals",
      "/exchange-accounts",
      "/support",
      "/help",
      "/terms-of-use",
      "/privacy-policy",
    ],
    links: [
      { text: "Web Trading App", link: "https://cryptuoso.com" },
      {
        text: "Telegram Trading Bot",
        link: "https://clc.la/cryptuoso_bot_beta",
      },
    ],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: "Cryptuoso Cryptocurrency Trading Robots | Support",
    description:
      "Cryptuoso Cryptocurrency Trading Robots - Documentation and Support",
    ogImage: null,
    docsLocation: "https://github.com/cryptuoso/cpz_docs/tree/master/content",
    favicon: "https://support.cryptuoso.com/favicon.png",
  },
};

module.exports = config;

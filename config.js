const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://docs.cryptuoso.com",
    gaTrackingId: null
  },
  header: {
    logo: "https://cpz-prod.cryptuoso.com/logo_cryptuoso.svg",
    logoLink: "https://docs.cryptuoso.com",
    title: "CRYPTUOSO - Documentation",
    githubUrl: "https://github.com/cryptuoso/cpz_docs",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "learn-hasura-test",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/introduction",
      "/signals",
      "/trading",
      "/exchange-accounts"
    ],
    links: [{ text: "CRYPTUOSO", link: "https://cryptuoso.com" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Cryptuoso Cryptocurrency Trading Platform | Documentation",
    description: "User Documentation",
    ogImage: null,
    docsLocation: "https://github.com/cryptuoso/cpz_docs/tree/master/content",
    favicon: "https://cpz-prod.cryptuoso.com/favicon.ico"
  }
};

module.exports = config;

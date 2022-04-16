// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Robert Colley",
  tagline: "Issues? What issues?",
  url: "https://robertjcolley.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/avatar.png",
  organizationName: "robertjcolley", // Usually your GitHub org/user name.
  projectName: "logbook", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/robertjcolley/logbook/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-5RJ4SEDBKY",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "chess-blog",
        routeBasePath: "chess-blog",
        path: "./chess-blog",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "exercise-blog",
        routeBasePath: "exercise-blog",
        path: "./exercise-blog",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "programming-blog",
        routeBasePath: "programming-blog",
        path: "./programming-blog",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Robert Colley",
        logo: {
          alt: "Robert Colley",
          src: "img/avatar.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/chess-blog", label: "Chess Blog", position: "left" },
          {
            to: "/programming-blog",
            label: "Programming Blog",
            position: "left",
          },
          // { to: "/exercise-blog", label: "Exercise Blog", position: "left" },
          {
            href: "https://github.com/robertjcolley/logbook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "My Links",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/bob_colley",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/robertjcolley",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/robert-colley/",
              },
              {
                label: "Email",
                href: "mailto:robertcolley04@gmail.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/robertjcolley",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Chess Blog",
                to: "/chess-blog",
              },
              {
                label: "Programming Blog",
                to: "/programming-blog",
              },
              // {
              //   label: "Exercise Blog",
              //   to: "/exercise-blog",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robert Colley.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

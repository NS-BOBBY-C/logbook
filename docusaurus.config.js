// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Robert Colley",
  tagline: "Issues? What issues?",
  url: "https://robertjcolley.github.io/",
  baseUrl: "/logbook/",
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
          editUrl: "https://github.com/robertjcolley/logbook/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
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
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "What is this?",
          },
          { to: "/blog", label: "Blog", position: "left" },
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
            title: "Me",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/bob_colley",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/robertjcolley",
              },
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

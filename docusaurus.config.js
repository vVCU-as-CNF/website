// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "vVCU-as-CNF",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.ico",

  // Set the production url of your site here
  url: "https://vvcu-as-cnf.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vVCU-as-CNF", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  deploymentBranch: "website-deploy", // Branch where the website shall be deployed.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          
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
      // Replace with your project's social card
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "vVCU-as-CNF",
        logo: {
          src: "img/logo.ico",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Documentation",
            position: "left",
          },
          {
            to: "https://github.com/vVCU-as-CNF",
            label: "GitHub",
            position: "left",
          },
        ],
      },
      footer: {
        
        style: "dark",
        
        copyright: `Copyright © PI ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

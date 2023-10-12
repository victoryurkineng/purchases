// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const title = 'Documentation';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  url: 'https://idme.pages.github.io/',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'idme', // Usually your GitHub org/user name.
  projectName: 'idme', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // TODO: Change this to your repo.
          editUrl: 'https://github.com/idme/front-end/edit/main/apps/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title,
        logo: {
          alt: title,
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/idme/front-end',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Victor Yurkin.`,
      },
    }),
};

module.exports = config;

This front-emd ecosystem is built with the following technologies:

- [NX](https://nx.dev) - monorepo management tool
  - WHY: **efficiently organizes** applications and libraries, provides a powerful **code generation** tools to keep you code standards consistent across the teams.

- [React.js](https://react.dev) - single page application
  - WHY: as far as the purchases list is only available for authenticated users, it doesn't require Search Engine Optimization. Thus, it doesn't make much sense to use more complex solutions such as [Next.js](https://nextjs.org) or [Gatsby.js](https://www.gatsbyjs.com). Build output is a static content which can be hosted on cost efficient solutions, such as AWS S3 or even Github pages.

- [pnpm](https://pnpm.io) - dependencies management tool
  - WHY: Fast, disk space efficient package manager

- [Storybook](https://storybook.js.org) - components management
  - WHY: the most popular and efficient tool to build and maintain UI components library in isolation from the application code.

- [Docusaurus](https://docusaurus.io) - documentation
  - WHY: powerful documentation solution which can be deployed as a static content (for example on Github pages) and is easy to organize all technical documentation (front-end, back-end, DevOps, etc...).

- [ESLint](https://eslint.org) / [Prettier](https://prettier.io) - code standardization
  - WHY: keep code style consistent across the teams

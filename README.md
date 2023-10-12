## Resources

The following applications have been deployed to GitHub Pages:

- Account App: https://victoryurkineng.github.io/purchases/account/
- Documentation: https://victoryurkineng.github.io/purchases/docs/
- Storybook: https://victoryurkineng.github.io/purchases/storybook/

The CI/CD is fully automated with GitHub Actions, including unit test coverage, E2E testing with Cypress, and release to GitHub Pages.

&nbsp;

## Contributing

### Prerequisites

- [Node.js](https://nodejs.org/en) (v16 is recommended)
- [pnpm](https://pnpm.io/installation)

### Install Dependencies

```bash
pnpm install
```

### Account App

This is a monorepo manged by [NX](https://nx.dev). Run the following command to run Account application locally:

```bash
pnpm run account
```

### Storybook

[Storybook](https://storybook.js.org) is a frontend workshop for building UI components and pages in isolation. Run Storybook locally:

```bash
pnpm run storybook
```

### Documentation

The documentation is built with [Docusaurus](https://docusaurus.io). Run the following command to run documentation locally:

```bash
pnpm run docs
```

### Unit Testing

Unit test-coverage is implemented using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

```bash
pnpm run test
```

### E2E Testing

E2E test-coverage is implemented using [Cypress](https://www.cypress.io/).

```bash
pnpm run e2e
```

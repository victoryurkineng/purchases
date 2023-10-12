## Testing Strategy

1. Run unit tests on PR
    - Failed tests block merging to main
2. Run unit tests when deploying main to dev
    - Failed tests block deployment to dev
3. Run e2e regression tests after deployed to staging against staging env
4. Run e2e smoke tests after deployed to production against prod env

## Test Coverage
- Cover all components, service and utility functions with unit tests
- Complex features are covered with apps e2e tests

## Unit Tests

Unit test-coverage is implemented using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

**Running Unit Tests**

```bash
pnpm run test
```

**Test Library**
```bash
pnpm nx test services
```

## E2E Tests

E2E test-coverage is implemented using [Cypress](https://www.cypress.io/).

**Running E2E Tests**

```bash
pnpm run e2e
```

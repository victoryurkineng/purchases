## Development Lifecycle

1. Pull project code `main` branch
2. Create a branch
3. Implement your changes
4. Run test, lint and build locally, before pushing your changes to the Github
```
pnpm nx run-many --target=test
pnpm nx run-many --target=lint
pnpm nx run-many --target=build
```
5. Create a PR form your branch to `main`
6. Github Actions will run unit tests and lint for each PR
7. Merge your PR to `main` and delete your branch
8. Github Actions will run unit tests, lint, build, e2e tests and will deploy `main` branch code to Github Pages:
    - Account app: https://victoryurkineng.github.io/purchases/app/
    - Documentation: https://victoryurkineng.github.io/purchases/docs/
    - Storybook: https://victoryurkineng.github.io/purchases/storybook/

## Feature-Sliced Design

[Feature-Sliced Design](https://feature-sliced.design/) - architectural methodology for frontend projects, which makes the code:
- Manageable
- Reusable
- Maintainable
- Testable

Your application becomes a "router/wrapper" which imports and renders various features.

## Atomic Design

[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) - split visual elements into atoms, molecules, organisms, templates, and pages.

## Design Tokens

Store all design related values in a single place. Allows to keep the design consistent across the whole application and simplifies design changes in the future.

[Learn more](/design-system)

## Code Abstraction

Avoid using 3rd-party libraries directly across the application. Instead, create a wrapper component, which will be responsible for the library usage:

API communication example:
```
UI Component > Service > Client > 3rd-party library
```
1. UI Component is using User service
2. User service is using HTTP client
3. HTTP client is using 3rd-party library - Axios

Following this principle allows to remove libraries dependency and allows to make changes safely and efficiently.
